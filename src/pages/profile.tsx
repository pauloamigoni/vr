import Head from 'next/head';
import React, { useRef, useCallback, useState } from 'react';
import { FiUserPlus, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { IoNewspaperOutline } from "react-icons/io5";

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';


import { Col, Container, Row } from 'react-bootstrap';
import { Footer} from '../components/Footer';
import { BiUserCircle} from 'react-icons/bi';

import { useToast } from '../hooks/toast';
import getValidationErros from '../utils/getValidationErros';

import Input from '../components/Input';
import Button from '../components/Button/index';

import styles from '../styles/pages/Profile.module.css';


interface SigInFormData {
  email: string;
  password: string;
  nome: string;
  documento: string;
}


export default function Profile() {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SigInFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                nome:Yup.string()
                        .required('Nome é Obrigatório'),
                documento:Yup.string()
                        .required('Documento é Obrigatório'),
                email: Yup.string()
                    .required('E-mail Obrigatório')
                    .email('Digite um E-mail válido'),
                password: Yup.string().min(6, 'Mínimo 6 Dígitos'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            history.push('/cart');
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErros(err);
                formRef.current?.setErrors(errors);
            }
        }
    },
    [addToast, history],
);



  return (

    <div className={styles.container}>
    <Head>
       <title>VR</title>
    </Head>


    <Container className={styles.boxRegister}>

            <Row>
              <div className={styles.title}>
                  <BiUserCircle /> Quer ser nosso cliente? Cadastre-se agora
              </div>
            </Row>

        
            <Form ref={formRef} onSubmit={handleSubmit}>

            <Row><br /></Row>
            <Row>
                 <Col>
                 <strong className={styles.labelInput} >Nome Completo</strong>
                 <Input
                    name="nome"
                    type="text"
                    placeholder="Nome Completo"
                />
                 </Col>
            </Row>
            <Row>
              <Col sm={6}>
                 <strong>E-mail</strong>
                  <Input
                    name="email"
                    type="mail"
                    placeholder="E-mail"
                />
              </Col>
              <Col sm={6}>
                 <strong>CPF</strong>
                 <Input
                    name="documento"
                    type="text"
                    placeholder="CPF"
                />

              </Col>
            
            </Row>
            <Row>

            <Col sm={6}>
                <strong>Senha</strong>
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                />
              </Col>
              <Col sm={6}>
              <strong>Repetir Senha</strong>
              <Input
                    name="password"
                    type="password"
                    placeholder="Repetir Senha"
                />

              </Col>
              </Row>
        
          
            <Row style={{textAlign: 'center', marginTop: '40px'}}>
                 <p>Ao cadastrar-se, você concorda com os Termos de Uso e Politica de Privacidade.</p>
            </Row>

            <Button type="submit">Cadastrar</Button>
            </Form>


</Container>
<Footer />
</div>
  )
}
