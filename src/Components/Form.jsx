import { useState } from 'react';
import '../App.css';

const MainForm = (props) => {
    return(
        <div>
            <form>
                <label>Answer:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default MainForm;