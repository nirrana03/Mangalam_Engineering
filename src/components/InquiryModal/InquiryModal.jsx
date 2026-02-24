import React, { useState, useEffect } from 'react';
import { X, Send, Upload } from 'lucide-react';
import { products } from '../../data/products';
import './InquiryModal.css';

const InquiryModal = ({ isOpen, onClose, initialProduct }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        product: initialProduct ? initialProduct.id : '',
        message: '',
        file: null
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add form submission logic here
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="modal-header">
                    <h2>Product Inquiry</h2>
                    <p>Explore the advantages of Elecon's ECH series, submit your inquiry below to also expect assistance on selecting the Rightmost Gear Solution for Your industrial needs.</p>
                </div>

                <form className="inquiry-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Select Product</label>
                        <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>--- Please Select Product ---</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Upload technical drawings or specifications</label>
                        <div className="file-upload-wrapper">
                            <input
                                type="file"
                                id="file-upload"
                                name="file"
                                onChange={handleFileChange}
                                hidden
                            />
                            <label htmlFor="file-upload" className="file-dropzone">
                                <Upload size={24} className="upload-icon" />
                                <span>{formData.file ? formData.file.name : 'Drag & Drop Or Click To Upload Files'}</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Type your message here..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-inquiry-btn">
                        SEND INQUIRY <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquiryModal;
