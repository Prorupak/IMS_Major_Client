/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-multi-comp */
import React, { useEffect, useRef, useState } from 'react';
import style from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  Autocomplete,
  Button,
  ButtonProps,
  Checkbox,
  InputAdornment,
  ListItem,
  MenuItem,
  TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { InputIcon } from 'Themes/utilityThemes';
import Icon from 'Assets/Icons/Icon';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX
} from 'validation/formRegex';
import useCountry from 'Hooks/useCountry';
import usePost from 'Hooks/usePost';
import { useInput } from 'Hooks/useInput';

const Form = style(motion.form).attrs({})`
  display: flex;
  align-items: center;
  flex-flow: column;
  max-width: 450px;
  margin: 80px 0 0 0;

  .form-section {
    display: grid;
    gap: 10px;
    width: 100%;
  margin: 10px;

  }
`;

const Heading = style(motion.header).attrs({
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.2, ease: 'easeInOut' }
})`
  font-size: var(--fSize-14);
  font-weight: bold;
  min-width: 300px;
  max-width: 370px;
  text-align: center;
`;

const Wrapper = style(motion.div).attrs({
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
})`
display: flex;
flex-flow: column;
align-items: center;
  width: 100%;
  .instructions {
    font-size: 0.75rem;
    color: var(--color-error);
    position: relative;
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }
  
`;

const Footer = style(motion.footer).attrs({})`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Social = style(motion.div).attrs({})`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const Error = style(motion.p).attrs({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`

`;

const SocialHeading = style(motion.p).attrs({})``;

const SocialLinks = style(motion.div).attrs({})`
display: flex;
align-items: center;
gap: 5px;
`;

const SocialLink = style(motion.a).attrs({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' },
  whileHover: { duration: 0.1, scale: 1.1, rotate: 10 },
  whileTap: { scale: 0.9 }
})`
cursor: Pointer;
height: 24px;
width: 24px;
img {
  height: 24px;
  width: 24px;
}
`;

const CheckboxWrapper = style(motion.div).attrs({})`
display: flex;
align-items: center;
margin: 3px 0;
.terms-content {
  font-size: var(--fSize-6);
  color: var(--color-placeholder);
}

.terms-service {
  cursor: pointer;
  color: var(--color-secondary);
  text-decoration: underline;
}
`;

export const ButtonMain = styled(Button)<ButtonProps>(() => ({
  backgroundColor: 'var(--color-button)',
  width: '100%',
  fontFamily: 'var(--primary-font)',
  color: '#fff',
  fontWeight: 'bold',
  paddingLeft: '0px',
  boxShadow: '0 1px 1px 1px rgba(0, 0, 0, 0.04)',
  '&:hover': {
    backgroundColor: 'var(--color-button)',
    filter: 'brightness(110%)',
    boxShadow: 'none'
  },
  '&::after': {
    backgroundRepeat: 'no-repeat',
    width: '16px',
    height: '16px',
    content: '""',
    position: 'absolute',
    top: '13px',
    left: '12px'
  }
}));

const FormSection = () => {
  const navigate = useNavigate();
  const { country } = useCountry();

  const nameRef = useRef({} as HTMLInputElement);
  const emailRef = useRef({} as HTMLInputElement);
  const passwordRef = useRef({} as HTMLInputElement);
  const countryRef = useRef({} as HTMLInputElement);
  const phoneRef = useRef({} as HTMLInputElement);
  const errRef = useRef({} as HTMLInputElement);

  const name = useInput('');
  // const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  // const [nameFocus, setNameFocus] = useState(true);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const [countries, setCountries] = useState('');

  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(true);

  const [checked, setChecked] = useState(false);

  // const [errMsg, setErrMsg] = useState<string | undefined>('');

  useEffect(() => {
    nameRef.current.focus();
    emailRef.current.focus();
    passwordRef.current.focus();
    phoneRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name.value));
    setValidEmail(EMAIL_REGEX.test(email));
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidPhone(PHONE_REGEX.test(phone));
  }, [name, email, password, phone]);

  const postData = {
    name: name.value,
    email,
    password,
    phone,
    countries
  };

  const { handleSubmit, error } = usePost(
    'http://localhost:9001/api/user',
    postData,
    '/login'
  );

  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // if button enabled with JS hack
  //   const v1 = NAME_REGEX.test(name);
  //   const v2 = EMAIL_REGEX.test(email);
  //   const v3 = PASSWORD_REGEX.test(password);
  //   const v4 = PHONE_REGEX.test(phone);
  //   if (!v1 || !v2 || !v3 || !v4) {
  //     setErrMsg('Invalid Entry');
  //     return;
  //   }

  //   try {
  //     const res = await axios.post('http://localhost:9001/api/user', {
  //       name,
  //       email,
  //       password,
  //       phone,
  //       countries
  //     });
  //     console.log(res);
  //     // eslint-disable-next-line react/jsx-indent
  //     // <navigate to="/login" />;
  //     navigate('/login');
  //     if (res.status === 204 || res.status === 200 || res.status === 201) {
  //       setErrMsg('');
  //       setName('');
  //       setEmail('');
  //       setPassword('');
  //       setPhone('');
  //       setChecked(false);
  //       setNameFocus(true);
  //       setEmailFocus(true);
  //       setPasswordFocus(true);
  //       setPhoneFocus(true);
  //       nameRef.current.focus();
  //       emailRef.current.focus();
  //       passwordRef.current.focus();
  //       phoneRef.current.focus();
  //     }
  //   } catch (err: any) {
  //     console.log('res', err.response.data.message);
  //     setErrMsg(err.response.data.message);
  //     errRef.current.focus();
  //   }
  // };

  console.log('Countries===>', country);

  const options = country.map((option) => {
    const firstLetter = option.toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option
    };
  });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <p
          ref={errRef}
          aria-live="assertive"
          className={error ? 'errmsg' : 'offscreen'}>
          {error}
        </p>
        <Heading>Start your full-featured free trial for 14 days</Heading>
        <section className="form-section">
          <Wrapper transition={{ duration: 0.2, ease: 'easeInOut' }}>
            <TextField
              ref={nameRef}
              aria-describedby="uidNote"
              aria-invalid={validName ? 'false' : 'true'}
              autoComplete="off"
              id="input-with-sx"
              // error={nameFocus ? Boolean(!validName) : true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputIcon alt="company" src={Icon.Company} />
                  </InputAdornment>
                )
              }}
              label={null}
              {...name.inputAttrs}
              // onBlur={() => setNameFocus(false)}
              // onChange={(e: any) => setName(e.target.value)}
              // onFocus={() => setNameFocus(true)}
              placeholder="Company Name"
              size="small"
              sx={{
                width: '100%'
              }}
              // value={name}
              variant="outlined"
            />
            <Error
              className={
                name.focused && name.value && !validName
                  ? 'instructions'
                  : 'offscreen'
              }
              id="uidNote">
              Please enter a valid company name.
            </Error>
          </Wrapper>
          <Wrapper transition={{ duration: 0.4, ease: 'easeInOut' }}>
            <TextField
              ref={emailRef}
              aria-describedby="emailNote"
              aria-invalid={validEmail ? 'false' : 'true'}
              autoComplete="off"
              id="input-with-sx"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputIcon alt="Mail" src={Icon.Mail} />
                  </InputAdornment>
                )
              }}
              label={null}
              onBlur={() => setEmailFocus(false)}
              onChange={(e: any) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              placeholder="Email Address"
              size="small"
              sx={{
                width: '100%'
              }}
              value={email}
              variant="outlined"
            />
            <Error
              className={
                emailFocus && email && !validEmail
                  ? 'instructions'
                  : 'offscreen'
              }
              id="emailNote">
              Please enter a valid Email Address.
            </Error>
          </Wrapper>
          <Wrapper transition={{ duration: 0.6, ease: 'easeInOut' }}>
            <TextField
              ref={passwordRef}
              aria-describedby="pwdNote"
              aria-invalid={validPassword ? 'false' : 'true'}
              autoComplete="off"
              id="input-with-sx"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputIcon alt="Password" src={Icon.Password} />
                  </InputAdornment>
                )
              }}
              label={null}
              onBlur={() => setPasswordFocus(false)}
              onChange={(e: any) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              placeholder="Password"
              size="small"
              sx={{
                width: '100%'
              }}
              value={password}
              variant="outlined"
            />
            <Error
              className={
                passwordFocus && password && !validPassword
                  ? 'instructions'
                  : 'offscreen'
              }
              id="emailNote">
              Password must be at least 8 characters long and contain: @, 1, d,
              H
            </Error>
          </Wrapper>

          <Wrapper transition={{ duration: 0.8, ease: 'easeInOut' }}>
            {/* <Autocomplete
              // getOptionLabel={(option) => option}
              // groupBy={(option) => option.firstLetter}
              id="grouped-demo"
              options={options.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
              )}
              renderInput={(params) => (
                <TextField {...params} label="With categories" />
              )}
              sx={{ width: 300 }}
            /> */}
            <TextField
              ref={passwordRef}
              aria-describedby="cNote"
              autoComplete="off"
              defaultValue="Select Country"
              id="outlined-select-currency"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputIcon alt="Country" src={Icon.Earth} />
                  </InputAdornment>
                )
              }}
              label={null}
              onChange={(e: any) => setCountries(e.target.value)}
              placeholder="Country"
              // add placeholder
              select
              size="small"
              sx={{
                width: '100%'
              }}
              value={countries}
              variant="outlined">
              {/* Country */}
              <MenuItem aria-label="counrty" value="Country">
                {/* <em>None</em> */}
                <ListItem>Nepal</ListItem>
              </MenuItem>
              {/* {country.map((option: any, idx: any) => (
                // eslint-disable-next-line react/no-array-index-key
                <MenuItem key={idx} value={option}>
                  <p>Nepal</p>
                  {option}
                </MenuItem>
              ))} */}
            </TextField>
          </Wrapper>
          <Wrapper transition={{ duration: 1, ease: 'easeInOut' }}>
            <TextField
              ref={phoneRef}
              aria-describedby="phNote"
              aria-invalid={validPhone ? 'false' : 'true'}
              autoComplete="off"
              id="input-with-sx"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputIcon alt="" src={Icon.Phone} />
                  </InputAdornment>
                )
              }}
              label={null}
              onBlur={() => setPhoneFocus(false)}
              onChange={(e: any) => setPhone(e.target.value)}
              onFocus={() => setPhoneFocus(true)}
              placeholder="Phone Number"
              size="small"
              sx={{
                width: '100%'
              }}
              value={phone}
              variant="outlined"
            />
            <Error
              className={
                phoneFocus && phone && !validPhone
                  ? 'instructions'
                  : 'offscreen'
              }
              id="cNote">
              Please enter a valid phone number.
            </Error>
          </Wrapper>
        </section>
        <Footer>
          <CheckboxWrapper>
            <Checkbox
              aria-describedby="cNote"
              onChange={(e: any) => {
                setChecked(!checked);
              }}
              size="small"
              value={checked}
            />
            <p className="terms-content">
              I agree to the{' '}
              <span className="terms-service">Terms of Service</span> and{' '}
              <span
                style={{
                  cursor: 'pointer',
                  color: 'var(--color-secondary)',
                  textDecoration: 'underline'
                }}>
                Privacy Policy
              </span>
              .
            </p>
          </CheckboxWrapper>
          <ButtonMain
            disabled={
              !validName ||
              !validEmail ||
              !validPassword ||
              !validPhone ||
              !countries ||
              !checked
            }
            type="submit"
            variant="contained">
            Create your free account
          </ButtonMain>
          <Social>
            <SocialHeading>or Sign in using</SocialHeading>
            <SocialLinks>
              <SocialLink>
                <img alt="Google" src={Icon.Google} />
              </SocialLink>
              <SocialLink>
                <img alt="Facebook" src={Icon.Facebook} />
              </SocialLink>
              <SocialLink>
                <img alt="Linkedin" src={Icon.Linkedin} />
              </SocialLink>
              <SocialLink>
                <img alt="Twitter" src={Icon.Twitter} />
              </SocialLink>
              <SocialLink>
                <img alt="Microsoft" src={Icon.Microsoft} />
              </SocialLink>
            </SocialLinks>
          </Social>
        </Footer>
      </Form>
    </>
  );
};

export default FormSection;




