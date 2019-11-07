import React, { Component } from 'react';
import _button from '../../SASS/Function/_button.scss';
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email" 
                    />
                </div>
            </div>
            <div>
            </div>
            ></form>
          )
      }
LoginForm = reduxForm({
                    form: 'user',
                destroyOnUnmount: false
            })(LoginForm)
            
export default LoginForm;