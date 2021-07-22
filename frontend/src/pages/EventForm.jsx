import React from 'react'
import { Formik } from 'formik'
import "../styles/EventForm.css"
import { useHistory } from "react-router";

function EventForm() {

    async function createNewEvent(values) {
        const res = await fetch("events", {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
        })
        const resBody = await res.json()
        console.log(resBody)


    }



    return (
        <div className="eventformbackground">
            <img className="logomin" src="images/logocintramin.png" />
            <div className="formcontainer">

                <Formik
                    initialValues={{ title: "", author: "", edate: "", location: "", price: "", tag: "", info: "", site: "https://" }}
                    onSubmit={(values, { setSubmitting }) => {
                        createNewEvent(values)
                        setTimeout(() => {
                            // console.log("Submitting", values);
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
                                            <option value="dança">Dança</option>
                                            <option value="exposição">Exposição</option>
                                            <option value="música">Música</option>
                                            <option value="teatro">Teatro</option>
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

                                        <label className="eventlabel">Autor</label>
                                        <input
                                            id="author"
                                            name="author"
                                            type="text"
                                            placeholder="Insira o responsável do evento"
                                            className="eventinput"
                                            required
                                            value={values.author}
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
                                                maxLength="50"
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
                                            step="0.50"

                                        />


                                        <div>
                                            <button type="submit" className="submitevent" disabled={isSubmitting}
                                            >Submeter evento
                                            </button>

                                        </div>
                                    </div>
                                </div>



                            </form>
                        );
                    }}
                </Formik>
                <button className="backbuttonevent" onClick={() => history.push("/homepage")}>Voltar</button>
            </div>
        </div>
    )
}

export default EventForm