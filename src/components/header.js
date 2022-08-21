import Input from "./input";
import style from "../styles/header.module.css";

const Header = ({ search, updateQuery }) => {
    return (
        <header className={style.container}>
            <h1 className={style.heading}>Self&apos;s Note</h1>
            <Input
                value={search}
                onChange={updateQuery}
                type='search'
                id='search_note'
                name='search_note'
                placeholder='Find Notes Here...'
            />
        </header>
    );
};

export default Header;
