import { Button, Form, Input, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { ReactHookForm } from 'context/ReactHookForms'
import React from 'react'
import styled from 'styled-components'

const StyledForm = styled(Form)`
 .ant-row.ant-form-item {
      gap: 40px;
 }
`

const StyledInput = styled(Input)``

const Top = () => {
     const { errors, Controller, control } = React.useContext(ReactHookForm)
     return (
          <StyledForm>
               <Form.Item label="Field A" validateStatus={errors.PrimaryContactSalutation ? "error" : "success"}  >
                    <Controller
                         control={control}
                         name="primaryContactSalutation"
                         rules
                         render={({ field }: any) => (
                              <Select
                                   aria-errormessage='error'
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
               <Form.Item label="Field B">
                    <Controller
                         control={control}
                         name="primaryContactSalutation"
                         render={({ field }: any) => (

                              <StyledInput />
                         )}
                    />               </Form.Item>
          </StyledForm>
     )
}

export default Top