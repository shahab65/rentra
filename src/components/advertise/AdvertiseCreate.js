import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {Button} from 'reactstrap';

import AddImageIcon from '../../assests/img/add-image.png';
import UploadDefault from '../../assests/img/upload-default.png';

class AdvertiseCreate extends Component {
  state = {
    selectedImages: [],
  };
  imageSelectedHandler = event => {
    const selectedImages = this.state.selectedImages;
    selectedImages.push(URL.createObjectURL(event.target.files[0]));
    this.setState(()=>({selectedImages}));

  };
  render() {
    console.log('state  is', this.state.selectedImages);

    return (

      <Formik
        validateOnBlur={true}
        initialValues={{
          cat: '',
          name: '',
          description: '',
          about: '',
        }}
        validationSchema={Yup.object().shape({
          cat: Yup.string()
            .required("لطفا این قسمت را تکمیل کنید."),
          name: Yup.string()
            .required("لطفا این قسمت را تکمیل کنید."),
          description: Yup.string()
            .required("لطفا این قسمت را تکمیل کنید."),
          about: Yup.string()
            .required("لطفا این قسمت را تکمیل کنید."),
        })}
        onSubmit={(values) => {
          const data = {
            "name": values.name,
            "description": values.description,
            "about": values.about,
            "cat": values.cat,
          };
          console.log(data);
        }}
        render={({values, touched, errors, handleChange}) => (
          <div>

            <Form>
              <ul className="list-inline">
                <li className="list-inline-item"><a className="social-icon text-xs-center" target="_blank"
                                                    href="#">FB</a></li>
                <li className="list-inline-item"><a className="social-icon text-xs-center" target="_blank"
                                                    href="#">G+</a></li>
                <li className="list-inline-item"><a className="social-icon text-xs-center" target="_blank" href="#">T
                </a>
                </li>
              </ul>
              <div className="container mb-5">
                <h4>ثبت آگهی</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="cat">دسته بندی</label>
                      <Field
                        name="cat"
                        type="text"
                        className="form-control"
                        placeholder="دسته بندی"
                      />
                      {touched.cat && errors.cat &&
                      <div className="invalid-feedback">
                        {errors.cat}
                      </div>}
                    </div>


                    <div className="form-group">
                      <label htmlFor="name"> نام و عنوان آگهی</label>
                      <Field
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="نام و عنوان آگهی"
                      />
                      {touched.name && errors.name &&
                      <div className="invalid-feedback">
                        {errors.name}
                      </div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">توضیحات کلی</label>
                      <textarea
                        name="description"
                        rows="4" cols="50"

                        value={values.description}
                        placeholder="توضیحات کلی"

                        onChange={handleChange}
                        className="form-control"
                      >
                  </textarea>
                      {touched.description && errors.description &&
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="about">ملاحظات</label>
                      <textarea
                        name="about"
                        rows="4" cols="50"

                        value={values.about}
                        placeholder="ملاحظات"

                        onChange={handleChange}
                        className="form-control"
                      >
                      </textarea>
                      {touched.about && errors.about &&
                      <div className="invalid-feedback">
                        {errors.about}
                      </div>}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4>عکس آگهی</h4>
                    <div className="row">
                      <input
                        style={{display:"none"}}
                        type = "file"
                        onChange={this.imageSelectedHandler}
                        ref={fileInput => this.fileInput = fileInput}
                        accept="image/*"
                      />
                      <div className="col-sm-3">
                        {this.state.selectedImages[0]
                          ?
                          <img
                            src={this.state.selectedImages[0]}
                            width="128" height="128"
                            alt=""/>
                          :
                          <a onClick={() => this.fileInput.click()}>
                            <img src={AddImageIcon} width="128" height="128" alt=""/>
                          </a>}

                      </div>
                      <div className="col-sm-3">
                        {this.state.selectedImages[1]
                          ?
                          <img
                            src={this.state.selectedImages[1]}
                            width="128" height="128"
                            alt=""/>
                          :
                          <a onClick={() => this.fileInput.click()}>
                            <img src={AddImageIcon} width="128" height="128" alt=""/>
                          </a>}

                      </div>
                      <div className="col-sm-3">
                        {this.state.selectedImages[2]
                          ?
                          <img
                            src={this.state.selectedImages[2]}
                            width="128" height="128"
                            alt=""/>
                          :
                          <a onClick={() => this.fileInput.click()}>
                            <img src={AddImageIcon} width="128" height="128" alt=""/>
                          </a>}

                      </div>
                      <div className="col-sm-3">
                        {this.state.selectedImages[3]
                          ?
                          <img
                            src={this.state.selectedImages[3]}
                            width="128" height="128"
                            alt=""/>
                          :
                          <a onClick={() => this.fileInput.click()}>
                            <img src={AddImageIcon} width="128" height="128" alt=""/>
                          </a>}

                      </div>
                    </div>
                    <h6 className="mt-4">یک عکس بهتر از هزار کلمه. با قرار دادن
                      عکس شانس دیده شدن آگهی تان را پنج برابر کنید</h6>
                    <div className="row">
                      <div className="col-sm-12">
                        <a>
                          <img src={UploadDefault} alt=""/>
                        </a>
                      </div>
                    </div>
                    <p>
                      <small>
                        با کلیک روی دکمه ثبت آگهی موافقت خود را با
                        <a href="">قوانین و شرایط استفاده رنترا</a>
                        اعلام می کنید.
                      </small>
                    </p>
                  </div>

                </div>
                <div className="text-left">
                  <Button
                    type="submit"
                    color="primary"

                  >
                    ثبت آگهی
                  </Button>
                </div>

              </div>
            </Form>
          </div>
        )}

      />

    );
  }
}

AdvertiseCreate.propTypes = {};

export default AdvertiseCreate;
