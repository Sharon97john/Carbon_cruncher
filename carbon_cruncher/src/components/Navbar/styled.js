import styled from 'styled-components';
const Navbar = styled.div`
    width: 100%;
    margin: 0;
    height: 260px;
    display: block;
    background-color: #015c62; /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, #015c62 , #178c69);
    border-radius: 0px 0px 0px 20px;
    box-shadow: 0 8px 8px -4px #ccc;

    .header{
        display: flex;
        padding: 20px;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        
        .logo{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
        }
        .hamburger{
            font-size: 25px;
        }
    }
`;

const Logo = styled.img`
    width: 40px;
`;
export {Navbar, Logo};