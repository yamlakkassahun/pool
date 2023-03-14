import { Typography } from "@mui/material";
import { DraftOrdersList } from "../../feature/order";

export default function DraftOrders() {
    return (
        <section>
            <Typography variant="h4" component="h1" paragraph>
                Draft orders
            </Typography>
            <DraftOrdersList/>
        </section>
    );
}