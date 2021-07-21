import React from 'react'
import { Field, Formik } from 'formik'
import "../styles/EventForm.css"

function EventForm() {
    return (
        <div>
            <h1>EventForm</h1>
            <div className="formcontainer">

                <Formik
                    initialValues={{ title: "", edate: "", location: "", etime: "", price: "", tag: "", info: "", site: "" }}
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
                                    <div className="row-span1">
                                        <label className="eventlabel">Título do evento</label>
                                        <input
                                            id="titulo"
                                            name="titulo"
                                            type="text"
                                            placeholder="Insira o título do evento"
                                            className="eventinput"
                                        />

                                        <label className="eventlabel">Categoria</label>
                                        <select id="tag" name="tag" className="eventinputtag">
                                            <option value="disabled" disabled>Escolha a sua opção</option>
                                            <option value="cinema">Cinema</option>
                                            <option value="dance">Dança</option>
                                            <option value="expo">Exposição</option>
                                            <option value="music">Música</option>
                                            <option value="painting">Pintura</option>
                                            <option value="theatre">Teatro</option>
                                        </select>

                                        <label className="eventlabel">Data</label>
                                        <input
                                            id="event-date"
                                            name="event-date"
                                            type="date"
                                            placeholder="Insira a data do evento"
                                            className="eventinputdate"
                                        />



                                        <label className="eventlabel">Hora</label>
                                        <input
                                            id="etime"
                                            name="etime"
                                            type="time"
                                            placeholder="Insira a hora do evento"
                                            className="eventinputtime"
                                        />
                                    </div>

                                    <div className="row-span2">
                                        <label className="eventlabel">Local</label>
                                        <input
                                            id="location"
                                            name="location"
                                            type="text"
                                            placeholder="Insira o local do evento"
                                            className="eventinput"
                                        />

                                        <label className="eventlabel">Info</label>
                                        <input
                                            id="info"
                                            name="info"
                                            type="text"
                                            placeholder="Insira uma breve descrição"
                                            className="eventinput"
                                        />

                                        <label className="eventlabel">Website</label>
                                        <input
                                            id="site"
                                            name="site"
                                            type="url"
                                            placeholder="Insira o seu website"
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

                                    </div>


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