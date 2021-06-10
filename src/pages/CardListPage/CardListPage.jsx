import classNames from "classnames/bind";
import styles from "./CardListPage.module.scss";
import { Link } from "react-router-dom";

import Label from "../../components/Label/Label";
import CardListSection from "../../sections/CardListSection/CardListSection";
import AddBoxButton from "../../components/AddBoxButton/AddBoxButton";
import { ANIMATION, HEADER_TEXT, PAGE_PATH } from "../../constants";
import { AppContext } from "../../contexts/appContext";
import { useContext } from "react";

const cx = classNames.bind(styles);

const CardListPage = () => {
  const { cardListState } = useContext(AppContext);

  return (
    <div className={`${cx("card-list-page")} ${ANIMATION.FADE_IN}`}>
      <header className={cx("card-list-page__header")}>
        <Label labelText={HEADER_TEXT.OWNED_CARD} />
      </header>
      <main className={cx("card-list-page__main")}>
        <CardListSection cardListState={cardListState} />
        <Link to={PAGE_PATH.ADD}>
          <AddBoxButton />
        </Link>
      </main>
    </div>
  );
};

export default CardListPage;