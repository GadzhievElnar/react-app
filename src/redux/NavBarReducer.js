let initialState = {
    friends: [
      { id: 1, name: 'Tania', srcImg: 'https://e7.pngegg.com/pngimages/634/109/png-clipart-spongebob-squarepants-season-1-nicktoons-drawing-spongebob-miscellaneous-vehicle.png' },
      { id: 2, name: 'Artem', srcImg: 'https://yt3.ggpht.com/ytc/AKedOLQydUlitSMvQ6lobyiynM0Dmu56FOz2tDEQkzVa=s900-c-k-c0x00ffffff-no-rj' },
    ]
  }

const NavBarReducer = (state = initialState, action) => {

    return {...state};
}

export default NavBarReducer;