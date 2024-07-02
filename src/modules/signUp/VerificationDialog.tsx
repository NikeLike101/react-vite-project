import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import {activateUser} from "./services.ts";
import {Close} from "@mui/icons-material";
import {useEffect} from "react";
import {RoutesEnum} from "../../router/routes.ts";
import {useAppNavigate} from "../../hooks/useAppNavigate.ts";

type FormikValuesType = {
    token: string,
    uid: string
}

const initialValues: FormikValuesType = {
    token: '',
    uid: ''
}

interface Props {
    open: boolean
    onClose: () => void
    email: string
}

const VerificationDialog: React.FC<Props> = ({open, onClose, email}) => {
    // const navigate = useNavigate()
    const navigate = useAppNavigate()

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {

            console.log(values, formik.values)
            const data = await activateUser(values)
            console.log(data, 'data')
            if (!data?.isSuccess) return





            formik.resetForm()
            navigate(RoutesEnum.login)

        }
    })

    const handleSubmit = () => {
        formik.handleSubmit()
        // onClose()
    }
    useEffect(() => {
        console.log(formik.values, 'hello')
    }, [formik.values]);


    return <Dialog open={open} PaperProps={{
        sx: {minWidth: '300px', minHeight: '400px'}
    }} sx={{}}>
        <DialogTitle sx={{
            background: '#38b4f8',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            Activation dialog
            <IconButton onClick={onClose}>
                <Close/>
            </IconButton>
        </DialogTitle>
        <DialogContent>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <Box>Enter your uid and token from message in ur email <Typography
                    variant={"overline"}>{email}</Typography></Box>
                <TextField name='uid' label={'user ID'} onChange={formik.handleChange} value={formik.values.uid}/>
                <TextField name='token' label='token' onChange={formik.handleChange} value={formik.values.token}/>

            </Box>
        </DialogContent>
        <DialogActions><Button variant='contained' onClick={handleSubmit}>submit</Button></DialogActions>
    </Dialog>
}


export default VerificationDialog