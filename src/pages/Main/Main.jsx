import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';
import MainFooter from '../../component/MainFooter/MainFooter';
import Receipts from '../../component/Receipt/Receipts';
import SummaryInfo from './Component/SummaryInfo';
import RecentReciept from './Component/RecentReciept';
import Pusher from 'pusher-js';
import axios from 'axios';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import PopReciept from '../../component/PopReciept/PopReciept';
>>>>>>> bff62f727f57d6d9754e8793b805a821c6f34258

const Main = () => {
  const [state, setState] = useState(undefined);
  const [receipts, setReceipts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user_index = localStorage.getItem('user_index');
    console.log(process.env.REACT_APP_API);
    axios
      .get(`${process.env.REACT_APP_API}/users/${user_index}/receipts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        setReceipts(r.data);
      });

    axios
      .get(`${process.env.REACT_APP_API}/users/${user_index}/favorite-food`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        setFavorites(r.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('355b90c48a1eaff96f03', {
      cluster: 'ap3',
      encrypted: true,
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      setState(data);
    });
    console.log(state);
  }, [state]);

  return (
    <Layout>
      <PopReciept state={state} setState={setState} />
      <SummaryInfo />
      <MainFooter favorites={favorites} />
      <RecentReciept />
      <FooterNavigate />
      <Receipts receipts={receipts} />
    </Layout>
  );
};

export default Main;
