import React from 'react'
import { Formik } from 'formik'
import "../styles/EventForm.css"

function EventForm() {
    return (
        <div>
            <h1>EventForm</h1>
            <div className="formcontainer">

                <Formik
                    initialValues={{ title: "", edate: "", location: "", price: "", tag: "", info: "", site: "" }}
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
                            handleSubmit
                        } = props;

                        return (
                            <form id="form1" onSubmit={handleSubmit}>
                                <div className="eventform">
                                    <div className="row-span1">

                                        <label className="eventlabel">Categoria</label>
                                        <select id="tag"
                                            name="tag"
                                            className="eventinputtag"
                                            required
                                            value={values.tag}
                                            onChange={handleChange}
                                            >
                                            <option value="" > - - - Escolha uma das opções - - - </option>
                                            <option value="cinema">Cinema</option>
                                            <option value="dance">Dança</option>
                                            <option value="expo">Exposição</option>
                                            <option value="music">Música</option>
                                            <option value="theatre">Teatro</option>
                                        </select>

                                        <label className="eventlabel" >Título do evento</label>
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            placeholder="Insira o título do evento"
                                            className="eventinput"
                                            required
                                            value={values.title}
                                            onChange={handleChange}
                                            
                                        />



                                        <label className="eventlabel">Data</label>
                                        <input
                                            id="edate"
                                            name="edate"
                                            type="datetime-local"
                                            placeholder="Insira a data do evento"
                                            className="eventinputdate"
                                            required
                                            value={values.edate}
                                            onChange={handleChange}
                                            
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
                                            required
                                            value={values.location}
                                            onChange={handleChange}
                                            
                                        />
                                        <div>
                                            <label className="eventlabel">Info</label>
                                            <textarea
                                                id="info"
                                                name="info"
                                                type="text"
                                                placeholder="Insira uma breve descrição:
                                            faixa(s) etária(s) a que se destina, sinopse, etc... "
                                                className="eventinputinfo" cols="30" rows="10"
                                                required
                                                maxLength="280"
                                                value={values.info}
                                                onChange={handleChange}
                                                
                                            ></textarea>
                                        </div>

                                    </div>

                                    <div className="row-span2">
                                        <label className="eventlabel">Website (URL)</label>
                                        <input
                                            id="site"
                                            name="site"
                                            type="url"
                                            placeholder="Insira o seu website"
                                            className="eventinput"
                                            required
                                            value={values.site}
                                            onChange={handleChange}
                                            
                                        />

                                        <label className="eventlabel">Preço (em euros)</label>
                                        <input
                                            id="price"
                                            name="price"
                                            type="number"
                                            min="0"
                                            placeholder="€€€"
                                            className="eventinputprice"
                                            required
                                            value={values.price}
                                            onChange={handleChange}
                                            step="0.01"
                                            
                                        />
                                    </div>

                                    <div>
                                        <button type="submit" className="submitevent" disabled={isSubmitting}
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