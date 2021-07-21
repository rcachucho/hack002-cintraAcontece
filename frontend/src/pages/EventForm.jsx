import React from 'react'
import { Field, Formik } from 'formik'
import "../styles/EventForm.css"

function EventForm() {
    return (
        <div>
            <h1>EventForm</h1>
            <div className="formcontainer">

                <Formik
                    initialValues={{ title: "", event_date: "", location: "", event_time: "", price: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log("Submitting", values);
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {props => {
                        const {
                            values,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;

                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="eventform">

                                    <label className="eventlabel">Título do evento</label>
                                    <input
                                        id="titulo"
                                        name="titulo"
                                        type="text"
                                        placeholder="Insira o título do evento"
                                        className="eventinput"
                                    />



                                    <label className="eventlabel">Data</label>
                                    <input
                                        id="event-date"
                                        name="event-date"
                                        type="date"
                                        placeholder="Insira a data do evento"
                                        className="eventinput"
                                    />



                                    <label className="eventlabel">Hora</label>
                                    <input
                                        id="event_time"
                                        name="event_time"
                                        type="time"
                                        placeholder="Insira a hora do evento"
                                        className="eventinput"
                                    />



                                    <label className="eventlabel">Local</label>
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        placeholder="Insira o local do evento"
                                        className="eventinput"
                                    />



                                    <label className="eventlabel">Preço (em euros)</label>
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        min="0"
                                        placeholder="€€€"
                                        className="eventinputprice"
                                    />

                                    <div>
                                        <button type="submit" className="submitevent"
                                        >Submeter evento
                                        </button>

                                    </div>

                                </div>



                            </form>
                        );
                    }}
                </Formik>

            </div>
        </div>
    )
}

export default EventForm