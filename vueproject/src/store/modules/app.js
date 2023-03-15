import Cookies from 'js-cookie'

const state = {
    sidebar:{
        opened:  Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    }
}