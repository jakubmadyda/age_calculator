import './styles/style.css'
import {Fab, TextField} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useFormik} from "formik";

function App() {

    const formik = useFormik({
        initialValues: {
            day: '',
            month: '',
            year: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="card">

                    <div className="card__header">
                        <div>
                            <h4>DAY</h4>
                            <TextField
                                id="day"
                                value={formik.values.day}
                                onChange={formik.handleChange}
                                variant="outlined"
                                placeholder="DD"
                                type="number"
                                xs={{
                                    width: '80px',
                                    height: '40px'
                                }}/>
                        </div>
                        <div>
                            <h4>MONTH</h4>
                            <TextField variant="outlined"
                                       placeholder="MM"
                                       type="number"
                                       id="month"
                                       value={formik.values.month}
                                       onChange={formik.handleChange}/>
                        </div>
                        <div>
                            <h4>YEAR</h4>
                            <TextField
                                id="year"
                                value={formik.values.year}
                                onChange={formik.handleChange}
                                variant="outlined"
                                placeholder="YYYY"
                                type="number"/>
                        </div>

                    </div>
                    <div className="card__submit">
                            <Fab type='submit' size="medium" color="secondary" aria-label="add">
                                <ArrowDownwardIcon/>
                            </Fab>
                    </div>
                    <div className="card__content">
                        <h4>- - years</h4>
                        <h4>- - months</h4>
                        <h4>- - days</h4>
                    </div>
                </div>
            </form>
        </>
    )
}

export default App
