import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';

import {
    Container, Col,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './login.css';
import * as Yup from "yup";

class Login extends Component {
    render() {
        return (
            <Formik
                validateOnBlur={true}
                initialValues={{
                    phone: '',
                }}
                validationSchema={Yup.object().shape({
                    phone: Yup.string()
                        .required("لطفا این قسمت را تکمیل کنید."),

                })}
                onSubmit={(values) => {
                    const data = {
                        "phone": values.phone,

                    };
                    console.log(data);
                }}
                render={({values, touched, errors}) => (
            <div className="container my-5 ">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className="login bg-dark  my-4 py-3">
                            <Form>
                                <div className="form-group mb-4">

                                    <h1 className="login__title">ورود</h1>
                                    <p className="login__text">
                                        لطفا برای ورود شماره تلفن خود را وارد کنید.
                                    </p>
                                    <div className="form-group">
                                        <label htmlFor="phone"> شماره تلفن</label>
                                        <Field
                                            name="phone"
                                            type="text"
                                            className="form-control"
                                            placeholder="شماره تلفن"
                                        />
                                        {touched.phone && errors.phone &&
                                        <div className="invalid-feedback">
                                            {errors.phone}
                                        </div>}
                                    </div>
                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-block btn-primary"
                                >ورود
                                </button>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>
                )}

            />
        );
    }
}

export default Login;
