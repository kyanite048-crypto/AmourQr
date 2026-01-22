import type { FC } from "react";

import { createStyles, Text } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => {
    return {
        logoText: {
            fontWeight: "bold",
            letterSpacing: "0.1em",
            fontSize: 24,
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: { fontSize: 20 },
        },
        titleLink: {
            "&:hover": { filter: "brightness(90%)" },
            alignItems: "center",
            display: "flex",
            marginBottom: 20,
            marginTop: 20,
            transition: "all 500ms ease",
        },
    };
});

/** Logo link component to be used to display AmourQR branding */
export const Logo: FC = () => {
    const { classes } = useStyles();

    return (
        <Link className={classes.titleLink} href="/">
            <Text className={classes.logoText}>AmourQR</Text>
        </Link>
    );
};
