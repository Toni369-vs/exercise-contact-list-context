import React, { useState, useNavigate, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


    export const UpdateModal = props => {

        const { store, actions } = useContext(Context);
    
        const [updateContact, setUpdateContact] = useState({
            full_name: "",
            email: "",
            agenda_slug: "ToniCM",
            address: "",
            phone: ""
        });
    
        const navigate = useNavigate();
    
        const handleChange = e => {
            setUpdateContact({ ...newContact, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = e => {
            e.preventDefault();
            actions.updateOneContact(updateContact.full_name, updateContact.address, updateContact.phone, updateContact.email);
    
            setUpdateContact({
                full_name: "",
                email: "",
                agenda_slug: "ToniCM",
                address: "",
                phone: ""
            });
    
            navigate("/");
        };




        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {props.onClose ? (
                                <button
                                    onClick={() => props.onClose()}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="container-modal">
                            <h1 className="text-center mt-5">Add a new contact</h1>
                            <form id="form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        name="full_name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="phone"
                                        className="form-control"
                                        placeholder="Enter phone"
                                        name="phone"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter address"
                                        name="address"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary form-control">
                                    save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    UpdateModal.propTypes = {
        history: PropTypes.object,
        onClose: PropTypes.func,
        show: PropTypes.bool,
        id: PropTypes.string
    };


    UpdateModal.defaultProps = {
        show: false,
        onClose: null,
    };