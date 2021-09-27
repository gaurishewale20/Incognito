import React from "react";
import AccordionFAQ from '../AccordionFAQ/AccordionFAQ';
import { Link } from 'react-router-dom';
import "./faqs.css";

const FAQs = () =>
{
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h3>FAQs and <Link to="/process">PROCESS</Link></h3>
                    <hr />
                </div>

            </div>

            <div className="faq__container">
                <div className="first">

                    <a href="/faqs"><button className="content__index" >Corona Virus</button></a>
                    <a href="#section2"><button className="content__index" >Covid-19</button></a>
                    <a href="#section3"><button className="content__index" >Symptoms</button></a>
                    <a href="#section4"><button className="content__index" >Spread</button></a>

                    <a href="#section5"><button className="content__index" >Protection</button></a>
                    <a href="#section6"><button className="content__index" >Medicine</button></a>


                </div>

                <div className="second">
                    <br /><hr />
                    <div id="section2">
                        <h4 className="sectiontitle" >CORONA VIRUS</h4>
                        <AccordionFAQ title="What is Corona Virus? "
                            content="Corona viruses are a large family of viruses which may cause illness in animals or humans.  
                    In humans, several coronaviruses are known to cause respiratory infections. They range from common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe
                      Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus
                       disease COVID-19."/>
                    </div>
                    <br /><hr />
                    <div id="section3" >
                        <h4 className="sectiontitle">COVID-19</h4>
                        <AccordionFAQ title="What is COVID-19?"
                            content="COVID-19 is an infectious disease caused by the most recently discovered coron
                    a virus. This new virus and disease were unknown befo
                    re the outbreak began in Wuhan, China, in December 2019."/>
                    </div>
                    <br /><hr />
                    <div id="section4" >
                        <h4 className="sectiontitle" > SYMPTOMS</h4>
                        <AccordionFAQ title="What are symptoms of COVID-19? "
                            content="The most common symptoms of COVID-19 are:
                    <ul>
                        <li>Fever</li>
                        <li>Tiredness</li>
                        <li>Dry Cough</li>
                        <li>Chills</li>
                    </ul>
                    <p>
                        Some patients may experience aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually.
                    Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty in
                    breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty in breathing should
                    seek medical attention. </p>"/>
                    </div><br /><hr />
                    <div id="section5">
                        <h4 className="sectiontitle">SPREAD</h4>
                        <AccordionFAQ title="How does COVID-19 spread?"
                            content="People can catch COVID-19 from others who have the virus. The disease can spread from person to person, through small droplets from the nose or mouth. These droplets are spread when a person with COVID-19 coughs or exhales and can land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets
                    from a person with COVID-19 who coughs or exhales. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick."/>
                        <br />
                        <AccordionFAQ title="Can the virus that causes COVID-19 be transmitted through the air? "
                            content="Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air. See previous answer on - How does COVID-19 spread?" />
                        <br />
                        <AccordionFAQ title="Can COVID-19 be caught from a person who has no symptoms?"
                            content="The main way the disease spreads is through respiratory droplets expelled by someone who is coughing. The risk of catching COVID-19 from someone with no symptoms at all is very low. However, many people with COVID-19 experience
                         only mild symptoms or may be asymptomatic. This is particularly true at the early stages of the disease. Therefore, it is possible to catch COVID-19 from someone who has, for example, just a mild cough and does not feel ill."/>
                    </div><br /><hr />

                    <div id="section6" >
                        <h4 className="sectiontitle">PROTECTION</h4>
                        <AccordionFAQ title="What are some protection measures for everyone? "
                            content="Stay aware of the latest information on the COVID-19 outbreak, available with the national, state and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks.
                        Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so keep up with the latest news. You can reduce your chances of being infected
                        or spreading COVID-19 by taking some simple precautions:
                        <ul>
                            <li> Regularly and thoroughly clean your hands with an alcohol based hand sanitizer or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your
                                hands.
                            </li>
                            <li> Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. Why? When someone coughs or sneezes, small liquid droplets are sprayed from their nose or mouth, which may contain virus.
                                If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease</li>
                            <li> Avoid touching eyes, nose and mouth. Why? Your hands touch many surfaces and can pick up viruses. Once contaminated, your hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and
                                can make you sick.</li>
                            <li> Ensure that you and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue whenever you cough or sneeze. Then dispose of the used tissue immediately.
                                Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.</li>
                            <li> Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority. Why? National and local authorities
                                will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and
                                help in prevention of viruses and infections. </li>
                            <li> Stay updated on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading quickly). If possible, avoid traveling to places – especially if you are an older person or have diabetes, heart or lung
                                disease. Why? You have a higher chance of catching COVID-19 in one of these areas.</li>
                        </ul>"/>
                        <br />
                        <AccordionFAQ title="What are protection measures for people who have recently visited (past 14 days) areas where COVID-19 is spreading?"
                            content="<ul>
                    <li> Follow the guidance outlined above (Protection measures for everyone) </li>
                    <li> Self-isolate by staying at home if you begin to feel unwell, even with mild symptoms such as headache, low grade fever (37.3 C° or above) and slight runny nose, until you recover. If you have someone who
                        brings you supplies or goes out, e.g. to buy food, then tell them to wear a mask to avoid infecting other people. Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more
                        effectively and help protect you and others from possible COVID-19 and other viruses. </li>
                    <li> If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel
                        or contact with travelers. Why? Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.</li>
                </ul>"/>
                    </div><br /><hr />
                    <div id="section7" >
                        <h4 className="sectiontitle">MEDICINE</h4>
                        <AccordionFAQ title="Are there any medicines or therapies or vaccines that can prevent or cure COVID-19?"
                            content="While some western, traditional or home remedies may provide comfort and alleviate symptoms of COVID-19, there is no evidence that current medicine can prevent or cure the disease. We do  not recommend self-medication with
                    any medicines, including antibiotics, as a prevention or cure for COVID-19. Covid-19 Vaccinations in India, so far :
                    <ul>
                    <li>Covishield</li>
                    <li>Sputnik</li>
                    <li>Moderna</li>
                    <li>Covaxin</li>
                    </ul> 
                    <p>Everyone 18 and older is eligible to get the vaccine against Covid-19. Availability may vary by state.</p>
                    "/>
                    </div>
                    <br /><hr />
                    <div id="section8" >
                        <h4 className="sectiontitle">VACCINE</h4>
                        <AccordionFAQ title="How do Covid Vaccines work?"
                            content="COVID-19 mRNA vaccines contain nucleic acids, which are the building blocks of all our cells. The mRNA carries instructions inside a lipid coating or fat bubble that tells cells to produce harmless pieces of 'spike' protein found on SARS-CoV-2. Once the protein is created, your immune system identifies it as a foreign molecule. The immune process starts, making antibodies that can attach to the virus. These antibodies protect you from getting COVID-19. Although widespread use of mRNA vaccines is new, this technology has been studied for decades. mRNA vaccines do not contain any live or dead parts of the virus. Once they’ve done their job, the messenger RNA quickly exits the body. mRNA vaccines are given in a two-dose series."/>
                    </div>
                    <br /><hr />
                    <div id="section9" >
                        <h4 className="sectiontitle">VACCINE REGISTRATION</h4>
                        <AccordionFAQ title="Where to register and get more info?"
                            content="Visit the following site to get more info about 
                            the Covid Vaccine!<br>
                            Register soon, and get vaccinated at your nearest center!
                            <a href='https://www.mygov.in/covid-19'>Click Here!</a>"/>
                    </div>
                </div>

            </div>

            <br />
        </div>

    );
}

export default FAQs;