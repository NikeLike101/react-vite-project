import {Box, Button, Paper, TextField} from "@mui/material";
import VerificationDialog from "./VerificationDialog.tsx";
import {useStyles} from "../login/styles.ts";
import {useNavigate} from "react-router-dom";
import {BaseSyntheticEvent, useMemo, useState} from "react";
import {createUser} from "./services.ts";
import {LoginFieldEnum} from "../login/Login.tsx";

const SignUp = () => {
    const random = Math.random() > 0.5
    const classes = useStyles(random)
    const [username, setUsername] = useState<string>('');
    const [isOpenActivationDialog, setIsOpenActivationDialog] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleChange = (e: BaseSyntheticEvent, field: LoginFieldEnum) => {
        switch (field) {
            case LoginFieldEnum.email:
                setEmail(e.target.value)
                break
            case LoginFieldEnum.password:
                setPassword(e.target.value)
                break
            case LoginFieldEnum.username:
                setUsername(e.target.value)
                break
        }
    }



    const isDisabledSubmitButton = useMemo(() =>
            !(username.length && email.length && password.length),
        [username, email, password])

    const handleCreateUser =async () => {
        const data = await createUser({email,password,username,name: 'krut'})
        if (data.id === undefined) return
        setIsOpenActivationDialog(true)

        // navigate(RoutesEnum.home)
    }
    const handleCloseActivationDialog = () => {
        setIsOpenActivationDialog(false)
    }
    return <> <Box sx={classes.wrapper}>
        <Paper sx={{padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <TextField
                value={username}
                onChange={(e) => handleChange(e, LoginFieldEnum.username)}
                label={'login'}
                helperText={'hello'}
                sx={classes.input}/>
            <TextField
                value={email}
                onChange={(e) => handleChange(e, LoginFieldEnum.email)}
                label={'email'}
                sx={classes.input}/>
            <TextField
                value={password}
                onChange={(e) => handleChange(e, LoginFieldEnum.password)}
                label={'password'}
                type={"password"}
                sx={classes.input}/>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                {/*<Button variant={"contained"}>cancel</Button>*/}
                <Button variant={"contained"} onClick={handleCreateUser} disabled={isDisabledSubmitButton}>enter</Button>
            </Box>
        </Paper>
    </Box>
        <VerificationDialog open={isOpenActivationDialog} onClose={handleCloseActivationDialog} email={email} password={password}/>
    </>
}

export default SignUp