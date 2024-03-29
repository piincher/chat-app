import React, { useCallback, useEffect, useReducer, useState } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather } from '@expo/vector-icons';

import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import { signIn } from '../utils/actions/authActions';
import { ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

const initialState = {
    inputValues: {
        email: "",
        password: "",
    },
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignInForm = props => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const dispatch = useDispatch();
    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);


     useEffect(() => {
        if (error) {
            Alert.alert("An error occured", error, [{ text: "Okay" }]);
        }
    }, [error])
    const authHandler = useCallback( async () => {
        try {
            setIsLoading(true);
             setError(null);
          await dispatch(signIn(
                formState.inputValues.email,
                formState.inputValues.password,
            ))
           
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    },[dispatch,formState])
    return (
            <>


               
                <Input
                    id="email"
                    label="Email"
                    icon="mail"
                    iconPack={Feather}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities["email"]} />

                <Input
                    id="password"
                    label="Password"
                    icon="lock"
                    iconPack={Feather}
                    autoCapitalize="none"
                    secureTextEntry
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities["password"]} />
                 {isLoading ? <ActivityIndicator size="large" color={colors.primary} /> : <SubmitButton
                    title="Sign in"
                    onPress={() => authHandler()}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid}/> }
                
            </>
    )
};

export default SignInForm;