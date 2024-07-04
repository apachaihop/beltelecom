import React, { useState, useEffect } from "react";
import Error from "../Error/error";
import "./third.css";
import axios from "axios";

const Branches = () => {
    const [filiali, setFiliali] = useState([]);
    const [filteredFiliali, setFilteredFiliali] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getService();
    }, []);

    const getService = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Bran.json');
            //  http://localhost:3000/Bran.json   localhost:8080/filials
            setFiliali(response.data.filiali);
            setFilteredFiliali(response.data.filiali);
            setError(null);
        } catch (error) {
            setError(error);
        }
    }

    const filterByLocation = (location) => {
        const filtered = filiali.filter(item => item.location === location);
        setFilteredFiliali(filtered);
    };

    const regions = [
        { id: 1, name: "Минск", location: "loc1" },
        { id: 2, name: "Минская обл.", location: "loc2"},
        { id: 3, name: "Гродненская обл.", location: "loc3"},
        { id: 4, name: "Гомельская обл.", location: "loc4"},
        { id: 5, name: "Могилевская обл.", location: "loc5"},
        { id: 6, name: "Брестская обл.", location: "loc6"},
        { id: 7, name: "Витебская обл.", location: "loc7"}
    ];

    return (
        <div className={"container__third__all"}>
            {error ? (
                    <Error error={error} />
                ) : (
                <>
                <div className={"container__first"}>
                    <button onClick={getService} className={"button button__branches"}>Получить все филиалы</button>
                </div>
                    <table className={"table__oblasti"}>
                            <tbody>
                                <tr className={"oblasti"}>
                                    {regions.map(region => (
                                        <td key={region.id} onClick={() => filterByLocation(region.location)}>
                                            {region.name}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table><table className={"table__vivod"}>
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Адрес</th>
                                    <th>Телефон</th>
                                    <th>Время Работы</th>
                                    <th>Рейтинг</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFiliali.map(filial => (
                                    <tr key={filial.id} className="rate__item">
                                        <td className="tbody__td">{filial.name}</td>
                                        <td className="tbody__td">{filial.address}</td>
                                        <td className="tbody__td">{filial.phone}</td>
                                        <td className="tbody__td">{filial.work}</td>
                                        <td className="tbody__td">{filial.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        <p className="p">
            <span style={{
                    fontSize: 30,
                    fontWeight: 600
                }}>О компании</span><br/><br/>

Республиканское унитарное предприятие электросвязи «Белтелеком» – ведущая телекоммуникационная компания с многолетней историей, персонал которой обеспечивает и развивает важные для государства, общества, частных и корпоративных клиентов технологии связи. В своей деятельности предприятие делает ставку на активную политику расширения и улучшения услуг электросвязи. Компания динамично развивается и занимает лидирующую позицию на телекоммуникационном рынке Республики Беларусь, являясь крупнейшим оператором электросвязи на территории нашей страны.<br/><br/>

 «Белтелеком» был создан 3 июля 1995 года как Республиканское государственное объединение. 1 августа 2004 года компания прошла преобразование в Республиканское унитарное предприятие электросвязи. Областные унитарные предприятия электросвязи, а также УП «Минская городская телефонная сеть», УП «Междугородная связь», УП «Минская телефонно-телеграфная станция» были реорганизованы в филиалы РУП «Белтелеком» путем присоединения.<br/><br/>

Сегодня компания «Белтелеком» включает в себя 9 филиалов и 3 производства в составе головного структурного подразделения предприятия.<br/><br/>

<span style={{
                    fontSize: 20,
                    fontWeight: 600
                }}>Филиалы «Белтелеком»</span><br/><br/>
<ul>
    <li className={"text__li"}>Брестский филиал</li>
    <li className={"text__li"}>Витебский филиал</li>
    <li className={"text__li"}>Гомельский филиал</li>
    <li className={"text__li"}>Гродненский филиал</li>
    <li className={"text__li"}>Могилевский филиал</li>
    <li className={"text__li"}>Минский филиал</li>
    <li className={"text__li"}>филиал «Минская городская телефонная сеть»</li>
    <li className={"text__li"}>филиал «Радио, телевидение и связь»</li>
    <li className={"text__li"}>филиал «Подсобное сельское хозяйство»</li>
</ul><br/>
<span style={{
                    fontSize: 20,
                    fontWeight: 600
                }}>Производства в составе головного структурного подразделения:</span><br/><br/>
<ul>
    <li className={"text__li"}>Международный центр коммутации</li>
    <li className={"text__li"}>Информационно-расчетный центр</li>
    <li className={"text__li"}>Производство Минская телефонно-телеграфная станция</li> 
</ul><br/>  
<span style={{
                    fontSize: 20,
                    fontWeight: 600
                }}>Миссия компании «Белтелеком» – объединять людей, предоставляя свободу общения и получения информации.</span>
            </p>

            </>
             )}

            

        </div>
    );
}

export default Branches;
