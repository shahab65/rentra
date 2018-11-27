import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';

import {
    Container, Col,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './signup.css';
import * as Yup from "yup";

class Signup extends Component {
    render() {
        return (
            <Formik
                validateOnBlur={true}
                initialValues={{
                    phone: '',
                    name:'',
                    lastName:''
                }}
                validationSchema={Yup.object().shape({

                    phone: Yup.string('string')
                        .matches(/(\+98|0)9(0[1-3]|3[0-1]|3[3-9]|1[0-9]|9[0-1]|2[0-2])-?[0-9]{3}-?[0-9]{4}/g,
                            "لطفا یک شماره تلفن معتبر وارد کنید.")
                        .required("لطفا این قسمت را تکمیل کنید."),

                    name: Yup.string()
                        .required("لطفا این قسمت را تکمیل کنید."),
                    lastName: Yup.string()
                        .required("لطفا این قسمت را تکمیل کنید."),

                })}
                onSubmit={(values) => {
                    const data = {
                        "phone": values.phone,

                    };
                    console.log(values);
                }}
                render={({values, touched, errors}) => (
            <div className="container my-5 ">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className="signup bg-dark  my-4 py-3">
                            <Form>
                                <div className="form-group mb-4">
                                    <h1 className="signup__title">ثبت نام</h1>
                                    <p className="signup__text">
                                        لطفا برای ثبت نام اطلاعات خود را وارد کنید.
                                    </p>
                                    <div className="form-group">
                                        <label htmlFor="name">نام</label>
                                        <Field
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            autoFocus
                                            placeholder="نام"
                                        />
                                        {touched.name && errors.name &&
                                        <div className="invalid-feedback">
                                            {errors.name}
                                        </div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">نام خانوادگی</label>
                                        <Field
                                            name="lastName"
                                            type="text"
                                            className="form-control"
                                            placeholder="نام خانوادگی"
                                        />
                                        {touched.lastName && errors.lastName &&
                                        <div className="invalid-feedback">
                                            {errors.lastName}
                                        </div>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone"> شماره تلفن</label>
                                        <Field
                                            name="phone"
                                            type="text"
                                            className={`form-control ${values.phone&& 'ltr'}`}                                            placeholder="شماره تلفن"
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

export default Signup;
