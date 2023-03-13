import React, { useState } from "react";

function Challenge() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

    function addItem() {
        setThingsArray((prevThings) => [
            ...prevThings,
            `Thing ${thingsArray.lenght + 1}`,
        ]);
    }

    const thingsElements = thingsArray.map((thing) => (
        <p key={thing}>{thing}</p>
    ));

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    );
}

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    });

    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

    function toggleFavorite() {
        setContact((prevContact) => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite,
        }));
    }

    return (
        <main>
            <article className="card">
                <img
                    src="./images/user.png"
                    className="card--image"
                    alt="profile"
                />
                <div className="card--info">
                    <Star
                        isFilled={contact.IsFavorite}
                        handleClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    );
}

function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
    <img
        src={`../images/${starIcon}`}
        className="card--favorite"
        alt="star"
        onClick={props.handleClick}
    />;
}
