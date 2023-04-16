import { Component } from "react";
import styles from "../styles/Filters.module.css"



export default class Filters extends Component {

    render() {

        return (
            <div className={styles.Container}>
                <div>
                    <div>
                        <input type="text" placeholder="Name Here" />
                    </div>
                </div>
                <div>
                    <div>
                        By Tag Name
                    </div>
                </div>
            </div>
        )
    }
}