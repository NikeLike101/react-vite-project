import {Box, Button, Paper, TextField} from "@mui/material";
import {useStyles} from "./styles.ts";
import {useMemo} from "react";
// import {getTokens} from "./services.ts";
import {RoutesEnum} from "../../router/routes.ts";
import {useFormik} from "formik";
import {useAppNavigate} from "../../hooks/useAppNavigate.ts";
import useAuth from "../../hooks/useAuth.ts";


const initialValues = {
    username: '',
    password: ''
}


const SignUpOriginal = () => {
    const {register} = useAuth()



    const random = Math.random() > 0.5
    const classes = useStyles(random)

    const navigate = useAppNavigate()

    const formik = useFormik({
        initialValues,
        onSubmit: async values => {

            register(values)
            //
            // const data = await getTokens(values)
            //
            //
            // localStorage.setItem('tokens', JSON.stringify(data))
            // navigate(RoutesEnum.home)
        }
    })

    const handleDone = () => {
        formik.handleSubmit()

    }


    const isDisabledSubmitButton = useMemo(() => formik.values.password.length === 0 || formik.values.username.length === 0, [formik.values.password, formik.values.username])

    return <>
        <Box sx={classes.wrapper}>
            <Paper sx={{padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <TextField
                    name={'username'}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    label={'username'}
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
                    <Button variant={"text"} onClick={() => navigate(RoutesEnum.login_original)}>log in</Button>
                    <Button variant={"contained"} onClick={handleDone} disabled={isDisabledSubmitButton}>enter</Button>
                </Box>
            </Paper>
        </Box>
    </>

}
export default SignUpOriginal