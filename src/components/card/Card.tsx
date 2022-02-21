import React, {useEffect, useState, FC} from 'react';
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import style from './Card.module.css';
import {getWordsAPI} from '../../services/dataAPI';
import {IWord, IRouteProps} from '../../services/types';
import CardPlayer from '../../pages/textbook/CardPlayer/CardPlayer';

const Card: FC<IRouteProps> = ({cardGroupId, groupPage, level}) => {
    const [cards, setCards] = useState<IWord[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [audio] = useState(new Audio());
    const [audioArray, setAudio] = useState<string[]>([]);

    const getCardsAssign = (group: number, page: number) => {
        getWordsAPI(group, page).then((result) => {
            setCards(result);
            setPageCount(30);
        });
    };
    useEffect(() => {
        getCardsAssign(cardGroupId, groupPage);
    }, [cardGroupId, groupPage, level]);

    const HandlerPageClick = (event: any) => {
        getCardsAssign(cardGroupId, event.selected);
    };

    return (
        <>
            <div className={style.cards}>
                {
                    cards.map((item) => (
                            <div className={`${style.container} card-container-${level}`} key={item.id}>
                                <div className={style.games_links}>
                                    <div className={`${style.game_link} ${style.audioGame_link}`}>
                                        <Link to='/'/>
                                        <span className={style.tooltip}>Начать игру Аудиовызов</span>
                                    </div>
                                    <div className={`${style.game_link} ${style.sprintGame_link}`}>
                                        <Link to='/'/>
                                        <span className={style.tooltip}>Начать игру Спринт</span>
                                    </div>
                                </div>
                                <div className={style.header}
                                     style={{backgroundImage: `url("https://rslang-helen-js.herokuapp.com/${item.image}")`}}>
                                    <div className={`${style.overlay} card-overlay-${level}`}>
                                        <div className={style.marks}>
                                            <div className={style.mark_difficult}>
                                                {"\u2605"}
                                                <span className={style.tooltip}>Отметить как сложное</span>
                                            </div>
                                            <div className={style.mark_difficult}>
                                                {"\u2665"}
                                                <span className={style.tooltip}>Отметить как изученное</span>
                                            </div>
                                            <div className={style.mark_difficult}>
                                                {"\u259F"}
                                                <span className={style.tooltip}>Статистика по слову</span>
                                            </div>
                                        </div>
                                        <div className={style.word}>
                                            <div className={style.primary}>
                                                <h3>{item.word}</h3>
                                            </div>
                                            <div className={style.translate_block}>
                                                <span>{item.wordTranslate}</span>
                                                <span>{item.transcription}</span>
                                                <div>
                                                     <CardPlayer url="https://rslang-helen-js.herokuapp.com/" audioNameList={[item.audio, item.audioMeaning, item.audioExample]}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.content}>
                                    <div className={style.word_block}>
                                        <div dangerouslySetInnerHTML={{__html: item.textMeaning}}/>
                                        <div className={style.word_example}>{item.textMeaningTranslate}</div>
                                    </div>
                                    <div className={style.word_block}>
                                        <div dangerouslySetInnerHTML={{__html: item.textExample}}/>
                                        <div className={style.word_example}>{item.textExampleTranslate}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <ReactPaginate
                previousLabel={'\u00AB'}
                nextLabel={'\u00BB'}
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={HandlerPageClick}
                containerClassName="z-0 relative flex rounded-md shadow-sm -space-x-px justify-center py-10"
                pageLinkClassName="z-10 relative bg-white border-gray-300 text-gray-500 hover:bg-indigo-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                previousLinkClassName="z-10 relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-indigo-100"
                nextLinkClassName="z-10 relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-indigo-100"
                breakLinkClassName="z-10 relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                activeClassName="z-20 relative bg-indigo-100 border-indigo-500 text-indigo-600 items-center border text-sm font-medium"
            />
        </>
    );
};

export default Card;
