import React, { useState } from "react";
import axios from "axios";
import Error from "../Error/error";
import "./second.css";
import Vk from "../../img/vk.png";
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import Twitter from "../../img/twitter.png"; 

const Users = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);


    const getUsers = async () => {
        try {
            const response = await axios.post('http://10.247.16.47:8081/api/users/find', {
              }, {
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            // localhost:8080/tariffs    http://localhost:3000/Ex.json
            setUser(response.data.rates);
            setError(null);
        } catch (error) {
            setError(error);
        }
    }

    return(
        <div className={"container__second__all"}>
            {error ? (
                    <Error error={error} />
                ) : (
                    <>
            <div className={"container__second"}>
                <button className={"button button__user"} onClick={getUsers}>Получить данные</button>

            <div className={"User"}>            
                {user.map(user => (
                        <div key={user.id} className="User__card">
                            <img className="User__photo" src={user.photo} alt={user.name} />
                            <h3 className={"Name"}>{user.name}</h3>
                            <p className={"Info"}>{user.description}</p>

                            <div className="Social">
                                {user.networks.map(network => (
                                    <div key={network.network} className="Icon2">
                                        <a href={network.url} target="_blank">
                                            {network.network === 'Twitter' ? <img className="Icon" src={Twitter} alt={"Twitter"} /> : console.log('')}
                                            {network.network === 'VK' ? <img className="Icon" src={Vk} alt={"Vk"} /> : console.log('')}
                                            {network.network === 'Facebook' ? <img className="Icon" src={Facebook} alt={"Facebook"} /> : console.log('')}
                                            {network.network === 'Instagram' ? <img className="Icon" src={Instagram} alt={"Instagram"} /> : console.log('')}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                ))}
                    </div>
                </div>

<div className="text">
                <p>
                <span style={{
                    fontSize: 30,
                    fontWeight: 600
                }}>Пресс-центр</span><br/><br/>

Представители средств массовой информации могут обратиться в группу по связям с общественностью, чтобы получить информацию о деятельности, услугах компании, а также по другим вопросам, относящимся к компетенции РУП «Белтелеком». Специалисты группы подготовят комментарий, справочную информацию, помогут организовать интервью, видеосъемку и т. д.
Для получения информации необходимо направить запрос с указанием темы публикации или видеосюжета (при необходимости – с предварительным списком вопросов), контактных данных журналиста, а также желаемой даты получения ответа или проведения съемки. Для организации видеосъемки указывается состав съемочной группы.
Для оперативной работы просим направлять запрос на е-mail: ekaterinamd@main.beltelecom.by <br/><br/>

                    <span style={{
                    fontSize: 20,
                    fontWeight: 600
                }}>Фирменный стиль</span><br/>
Логотип и знак «Белтелеком» – основа фирменного стиля.<br/>
Логотип, знак и фирменный блок имеют установленные размеры и пропорции.<br/><br/>
                </p>


                <p>
                <span style={{
                    fontSize: 30,
                    fontWeight: 600
                }}>Контакты</span><br/><br/>

Получить ответы на интересующие Вас вопросы по услугам нашей компании можно по телефону 123 – единый центр обслуживания клиентов. Номер телефона действует по всей территории Республики Беларусь. Звонки бесплатные.<br/><br/>

<span style={{
                    fontSize: 20,
                    fontWeight: 600
                }}>Контакты для деловых партнеров</span><br/><br/>

Республиканское унитарное предприятие электросвязи "Белтелеком"<br/>
Адрес: ул. Энгельса, 6, 220030, г. Минск, Республика Беларусь<br/>

тел.: +375 17 2171005 (приемная генерального директора)<br/>
факс: +375 17 3274422
                </p>

            </div>
            </>
            )}

            

        </div>
    );
}

export default Users;