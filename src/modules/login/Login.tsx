import {Box, Button, Paper, TextField} from "@mui/material";
import {useStyles} from "./styles.ts";
import {useMemo} from "react";
import {getTokens} from "./services.ts";
import {RoutesEnum} from "../../router/routes.ts";
import {useFormik} from "formik";
import {useAppNavigate} from "../../hooks/useAppNavigate.ts";

export const enum LoginFieldEnum {
    username = 'username',
    email = 'email',
    password = 'password',
}


const initialValues = {
    email: '',
    password: ''
}

const Login: React.FC = () => {

    const random = Math.random() > 0.5
    const classes = useStyles(random)

    const navigate = useAppNavigate()

    const formik = useFormik({
        initialValues,
        onSubmit: async values => {


            const data = await getTokens(values)


            localStorage.setItem('tokens', JSON.stringify(data))
            navigate(RoutesEnum.home)
        }
    })

    const handleDone = () => {
        formik.handleSubmit()

    }


    const isDisabledSubmitButton = useMemo(() => formik.values.password.length === 0 || formik.values.email.length === 0, [formik.values.password, formik.values.email])

    return <>
        <Box sx={classes.wrapper}>
            <Paper sx={{padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <TextField
                    name={'email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    label={'email'}
                    sx={classes.input}/>
                <TextField
                    name={'password'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    label={'password'}
                    type={"password"}
                    sx={classes.input}/>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/*<Button variant={"contained"}>cancel</Button>*/}
                    <Button variant={"contained"} onClick={handleDone} disabled={isDisabledSubmitButton}>enter</Button>
                </Box>
            </Paper>
        </Box>
    </>
}

export default Login