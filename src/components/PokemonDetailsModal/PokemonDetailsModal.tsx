import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CLOSE_BTN_TEXT, NO_DETAILS_FOUND } from "../../constants/strings";
import { useGetPokemon } from "../../hooks";
import { Loader } from "../Loader";
import { PokemonDetails } from "../PokemonDetails";
import { Toast } from "../Toast/Toast";
import { StyledButton, useStyles } from "./PokemonDetailsModal.styled";

const PokemonDetailsModal: React.FC = () => {

    const classes = useStyles();

    const navigate = useNavigate();

    const { id, name } = useParams();

    const { pokemonDetails, loading, error } = useGetPokemon(id, name);

    const handleDialogClose = () => {
        navigate(-1)
    }

    if (loading) {
        return <Loader size="sm"></Loader>;
    }

    return (
        <>
            <Dialog
                fullWidth={true}
                onClose={handleDialogClose}
                PaperProps={{
                    sx: {
                        height: 'auto'
                    }
                }}
                open={true} >
                <DialogTitle className={classes.title}>
                    {pokemonDetails && <div className={classes.pkmNumber}>#{pokemonDetails?.number}</div>}
                    {pokemonDetails && <div className={classes.pkmName}>{pokemonDetails?.name}</div>}
                </DialogTitle>
                <DialogContent className={classes.colorBlack}>
                    {pokemonDetails ? <PokemonDetails {...pokemonDetails} /> : !loading && NO_DETAILS_FOUND}
                </DialogContent>
                <DialogActions dir="left">
                    <StyledButton variant='contained' className={classes.colorBlack} onClick={handleDialogClose}>{CLOSE_BTN_TEXT}</StyledButton>
                </DialogActions>
            </Dialog>
            <Toast message={error?.message} opened={!!error?.message}
             severity={"error"}></Toast> 
        </>
    );
};

export default PokemonDetailsModal;