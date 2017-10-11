import React from 'react'
import axios from 'axios';

export function loadMonths(){
     return  axios.get("http://localhost:8080/expenses/months");
}