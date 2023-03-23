import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";

export default class NavbarLeft extends Component {
  render() {
    return (
      <div className="h-screen w-1/5 bg-gray-800 text-white">
        <h1 className="text-2xl justify-center font-bold mb-4 pt-4">Pilih Kategori</h1>
        <div className="w-full border-b-2 border-gray-700 my-4"></div>
        <div className="flex flex-col justify-center items-center">
          <ul className="text-lg">
            <li className="my-2">
              <a href="www.google.com">
                <Icon.EggFried className="w-5 h-5 inline-block mr-2" />
                Makanan
              </a>
            </li>
            <li className="my-3">
              <a href="www.google.com">
                <Icon.CupStraw className="w-5 h-5 inline-block mr-2" />
                Minuman
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
