import { Typography } from "@mui/material";
import { RecentOrderList } from "../../feature/order";

export default function RecentOrders() {

    return (
        <section>
            <Typography variant="h4" component="h1" paragraph>
                Recent orders
            </Typography>
            <RecentOrderList/>
        </section>
    );
}