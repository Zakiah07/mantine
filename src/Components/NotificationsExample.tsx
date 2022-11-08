import { useState } from "react";
import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import axios from "axios";

function NotificationsExample() {
    // const notifications = useNotifications();
    const [randomPlayer, setRandomPlayer] = useState({ first_name: "" });

    const getPlayerName = () => {
        axios.get("https://www.balldontlie.io/api/v1/players/237")
            .then((res) => {
                setRandomPlayer(res.data);
                showNotification({
                    message: "WE GOT YOUR DATA!",
                    title: "HERES A DATA!",
                    color: "green",
                })
            })
    }

    return (
        <div>
            <Button variant="outline"
                onClick={() => {
                    showNotification({
                        message: "WE ARE GETTING YOUR DATA"
                    })
                    getPlayerName()
                }}>
                Show Data
            </Button>
            {randomPlayer.first_name}
        </div>
    )
}

export default NotificationsExample;