import { ErrorMessage } from '@hookform/error-message'
import { Button, Form, Input, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { ReactHookForm } from 'context/ReactHookForms'
import React from 'react'
import styled from 'styled-components'
import { TooltipMui } from 'Themes/MaterialUI'
import { Item } from 'Themes/utilityThemes'

const StyledForm = styled(Form)`
text-align: left;
 .ant-row.ant-form-item {
      gap: 30px;
      text-align: left;
 }
 .ant-form-item-label > label {
      width: 140px;
 }
 .ant-form-item-explain-error {
      font-size: 12px;
 }

 .ant-select-selection-placeholder {
    padding-right: 18px;
    font-size: 12px;
}

.ant-input {
     font-size: 12px;
}
`

const StyledInput = styled(Input)`

`

const Top = () => {
     const { errors, Controller, control } = React.useContext(ReactHookForm)
     return (
          <>
               <StyledForm>
                    <Form.Item
                         style={{ marginBottom: "-28px" }}
                         label={
                              <TooltipMui title="The name you enter here will be for your primary contact.">
                                   <Item
                                        color="var(--color-primary-dark)"
                                        fontSize="14px"
                                        fontWeight="medium"
                                        height="65%"
                                        width="72%"
                                        margin="0px 0px"
                                        style={{
                                             borderBottom: "1px dashed #969696",
                                             // paddingBottom: "2px",
                                        }}
                                   >
                                        Primary Name
                                   </Item>
                              </TooltipMui>
                         } colon={false}>
                         <Form layout="inline" style={{ display: "flex", flexFlow: "row", gap: 0 }} wrapperCol={{ span: 0 }}>
                              <Form.Item
                                   validateStatus={errors.PrimaryContactSalutation ? "error" : "success"}
                                   help={(
                                        <ErrorMessage errors={errors} name="PrimaryContactSalutation" />
                                   )}
                                   colon={false}

                              >
                    <Controller
                         control={control}
                                        name="primaryContactSalutation"
                         render={({ field }: any) => (
                              <Select
                                   placeholder="Salutation"
                                   {...field}
                                   allowClear
                              >
                                   <Option value="Mr.">Mr.</Option>
                                   <Option value="Mrs.">Mrs.</Option>
                                   <Option value="Miss.">Miss.</Option>
                                   <Option value="Ms">Ms.</Option>
                                   <Option value="Dr.">Dr.</Option>
                              </Select>
                         )}
                    />

               </Form.Item>
                              <Form.Item
                                   validateStatus={errors.FirstName ? "error" : "success"}
                                   help={<ErrorMessage errors={errors} name="FirstName" />}
                              >
                                   <Controller
                                        render={({ field }: any) => (
                                             <Input autoComplete='off' placeholder='First Name' id={errors.FirstName ? "error" : "success"} status={errors.FirstName ? "error" : ""} allowClear {...field} style={{ width: "200px" }} />

                                        )}
                                        name={"FirstName"}
                                        control={control}
                                        rules={{
                                             pattern: {
                                                  value: /^[a-zA-Z]*$/,
                                                  message: "only letters"
                                             }
                                        }}
                                        defaultValue=""
                                   />

                              </Form.Item>
                              <Form.Item
                                   validateStatus={errors.LastName ? "error" : "success"}
                                   help={<ErrorMessage errors={errors} name="LastName" />}

                              >
                                   <Controller
                                        render={({ field }: any) => (
                                             <Input autoComplete='off' placeholder='Last Name' id={errors.LastName ? "error" : "success"} status={errors.LastName ? "error" : ""} allowClear {...field} style={{ width: "200px" }} />

                                        )}
                                        name={"LastName"}
                                        control={control}
                                        rules={{
                                             pattern: {
                                                  value: /^[a-zA-Z]*$/,
                                                  message: "only letters"
                                             }
                                        }}
                                        defaultValue=""
                                   />

                              </Form.Item>
                         </Form>
                    </Form.Item>
                    <Form.Item
                         validateStatus={errors.company ? "error" : "success"}
                         label="Company"
                         colon={false}
                         help={<ErrorMessage errors={errors} name="company" />}
                    >
                         <Controller
                              render={({ field }: any) => (
                                   <Input autoComplete='off' placeholder='' id={errors.company ? "error" : "success"} status={errors.company ? "error" : ""} allowClear {...field} style={{ width: "320px" }} />

                              )}
                              name={"company"}
                              control={control}
                              rules={{
                                   pattern: {
                                        value: /^[a-zA-Z]*$/,
                                        message: "only letters"
                                   }
                              }}
                              defaultValue=""
                         />

                    </Form.Item>
                    <Form.Item
                         validateStatus={errors.customerDisplayName ? "error" : "success"}
                         label={
                              <TooltipMui title="This name will be displayed on the transactions you create for this customer">
                                   <Item
                                        fontSize="14px"
                                        fontWeight="medium"
                                        height="115%"
                                        width="90%"
                                        color="var(--color-required)"
                                        margin="0px 0px"
                                        style={{
                                             borderBottom: "1px dashed #969696",
                                             // paddingBottom: "2px",
                                             textAlign: "left",
                                             textDecoration: ""
                                        }}
                                   >
                                        Customer Display
                                        <br />
                                        Name
                                   </Item>
                              </TooltipMui>
                         }
                         colon={false}
                         help={<ErrorMessage errors={errors} name="customerDisplayName" />}
                    >
                         <Controller
                         render={({ field }: any) => (
                                   <Input autoComplete='off' placeholder='' id={errors.customerDisplayName ? "error" : "success"} status={errors.customerDisplayName ? "error" : ""} allowClear {...field} style={{ width: "320px" }} />

                         )}
                              name={"customerDisplayName"}
                              control={control}
                              rules={{
                                   required: "This Field is required.",
                                   pattern: {
                                        value: /^[a-zA-Z]*$/,
                                        message: "only letters"
                                   }
                              }}
                              defaultValue=""
                         />

                    </Form.Item>
                    <Form.Item
                         validateStatus={errors.Email ? "error" : "success"}
                         label={
                              <Item
                                   fontSize="14px"
                                   fontWeight="medium"
                                   height="115%"
                                   width="90%"
                                   color="var(--color-primary-dark)"
                                   margin="0px 0px"
                                   style={{
                                        textAlign: "left",
                                        textDecoration: ""
                                   }}
                              >
                                   Email
                              </Item>
                         }
                         colon={false}
                         help={<ErrorMessage errors={errors} name="Email" />}
                    >
                         <Controller
                              render={({ field }: any) => (
                                   <Input autoComplete='off' placeholder='' id={errors.Email ? "error" : "success"} status={errors.Email ? "error" : ""} allowClear {...field} type="email" style={{ width: "320px" }} />

                              )}
                              name={"Email"}
                              control={control}
                              rules={{
                                   pattern: {
                                        value: /^[0-9]/,
                                        message: "only Numbers are allowed."
                                   }
                              }}
                              defaultValue=""
                         />

                    </Form.Item>
                    <Form.Item
                         validateStatus={errors.phone ? "error" : "success"}
                         label={
                              <Item
                                   fontSize="14px"
                                   fontWeight="medium"
                                   height="115%"
                                   width="90%"
                                   color="var(--color-primary-dark)"
                                   margin="0px 0px"
                                   style={{
                                        textAlign: "left",
                                        textDecoration: ""
                                   }}
                              >
                                   Customer Phone
                              </Item>
                         }
                         colon={false}
                         help={<ErrorMessage errors={errors} name="phone" />}
                    >
                         <Controller
                              render={({ field }: any) => (
                                   <Input autoComplete='off' placeholder='' id={errors.phone ? "error" : "success"} status={errors.phone ? "error" : ""} allowClear {...field} style={{ width: "320px" }} />

                              )}
                              name={"phone"}
                              control={control}
                              rules={{
                                   pattern: {
                                        value: /^[0-9]/,
                                        message: "only Numbers are allowed."
                                   }
                              }}
                              defaultValue=""
                         />

                    </Form.Item>
                    <Form.Item
                         validateStatus={errors.website ? "error" : "success"}
                         label={
                              <Item
                                   fontSize="14px"
                                   fontWeight="medium"
                                   height="115%"
                                   width="90%"
                                   color="var(--color-primary-dark)"
                                   margin="0px 0px"
                                   style={{
                                        textAlign: "left",
                                        textDecoration: ""
                                   }}
                              >
                                   website
                              </Item>
                         }
                         colon={false}
                         help={<ErrorMessage errors={errors} name="website" />}
                    >
                         <Controller
                              render={({ field }: any) => (
                                   <Input autoComplete='off' placeholder='' id={errors.website ? "error" : "success"} status={errors.website ? "error" : ""} allowClear {...field} style={{ width: "320px" }} />

                              )}
                              name={"website"}
                              control={control}
                              rules={{
                                   pattern: {
                                        value: /^[0-9]/,
                                        message: "Please Enter the valid website"
                                   }
                              }}
                              defaultValue=""
                         />

                    </Form.Item>
                    <Form.Item
                         validateStatus={errors.paymentTerms ? "error" : "success"}
                         label={
                              <Item
                                   fontSize="14px"
                                   fontWeight="medium"
                                   height="115%"
                                   width="90%"
                                   color="var(--color-primary-dark)"
                                   margin="0px 0px"
                                   style={{
                                        textAlign: "left",
                                        textDecoration: ""
                                   }}
                              >
                                   Payment Terms
                              </Item>
                         }
                         colon={false}
                         help={<ErrorMessage errors={errors} name="paymentTerms" />}
                    >
                         <Controller
                              render={({ field }: any) => (
                                   <Select
                                        placeholder="Payment Terms"
                                        {...field}
                                        style={{ width: "320px" }}
                                        id={errors.paymentTerms ? "error" : "success"}
                                        allowClear
                                   >
                                        <Option value="Mr.">Mr.</Option>
                                        <Option value="Mrs.">Mrs.</Option>
                                        <Option value="Miss.">Miss.</Option>
                                        <Option value="Ms">Ms.</Option>
                                        <Option value="Dr.">Dr.</Option>
                                   </Select>

                              )}
                              name={"paymentTerms"}
                              control={control}
                              defaultValue=""
                         />

                    </Form.Item>
          </StyledForm>
          </>
     )
}

export default Top