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
                validateOnBlur={false}
                initialValues={{
                    phone: '',
                }}
                validationSchema={Yup.object().shape({

                    phone: Yup.string('string')
                        .matches(/(\+98|0)9(0[1-3]|3[0-1]|3[3-9]|1[0-9]|9[0-1]|2[0-2])-?[0-9]{3}-?[0-9]{4}/g,
                            "لطفا یک شماره تلفن معتبر وارد کنید.")
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
                                            autoFocus
                                            className={`form-control ${values.phone&& 'ltr'}`}                                            placeholder="شماره تلفن"
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
