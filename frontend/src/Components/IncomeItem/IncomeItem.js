import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/dateFormat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCreditCard, faTags, faWallet, faCog, faSignOut, faMoneyBillTrendUp, faMoneyBillTransfer, faMoneyBill, faEarthAmericas, faArrowTrendUp, faBitcoin, faPiggyBank, faYoutube, faCcVisa, faUsersBetweenLines, faDollarSign, faCalendar, faComment, faPlus, faTrash, faUtensils, faShirt, faBookOpen, faBowlFood, faBriefcaseMedical, faTv, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return <FontAwesomeIcon icon={faMoneyBill} />;
            case 'freelancing':
                return <FontAwesomeIcon icon={faEarthAmericas} />;
            case 'investments':
                return <FontAwesomeIcon icon={faArrowTrendUp} />;
            case 'stocks':
                return <FontAwesomeIcon icon={faUsersBetweenLines} />;
            case 'bitcoin':
                return <FontAwesomeIcon icon={faUsersBetweenLines} />;
            case 'bank':
                return <FontAwesomeIcon icon={faCreditCard} />;
            case 'youtube':
                return <FontAwesomeIcon icon={faUsersBetweenLines} />;
            case 'other':
                return <FontAwesomeIcon icon={faPiggyBank} />;
            default:
                return '';
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return <FontAwesomeIcon icon={faBookOpen} />;
            case 'groceries':
                return <FontAwesomeIcon icon={faBowlFood} />;
            case 'health':
                return <FontAwesomeIcon icon={faBriefcaseMedical} />;
            case 'subscriptions':
                return <FontAwesomeIcon icon={faTv} />;
            case 'takeaways':
                return <FontAwesomeIcon icon={faUtensils} />;
            case 'clothing':
                return <FontAwesomeIcon icon={faShirt} />;
            case 'travelling':
                return <FontAwesomeIcon icon={faEarthAmericas} />;
            case 'other':
                return <FontAwesomeIcon icon={faCircleDot} />;
            default:
                return '';
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p><FontAwesomeIcon icon={faDollarSign} /> {amount}</p>
                        <p><FontAwesomeIcon icon={faCalendar} /> {dateFormat(date)}</p>
                        <p>
                            <FontAwesomeIcon icon={faComment} />
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={<FontAwesomeIcon icon={faTrash} />}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem;
