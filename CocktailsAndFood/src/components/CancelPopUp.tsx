import StandardButton from "./StandardButton";

export const CancelPopup = ({
    submit,
    isPopupOpen,
    closePopup,
}: {
    isPopupOpen: boolean;
    submit: () => void;
    closePopup: () => void;
}) => {
    return (
        <>
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-10"></div>
            )}

            {isPopupOpen && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white m-auto z-20 rounded-[25px] shadow-custom-big">
                    <div className="flex flex-col items-center">
                        <p className="text-center text-xl p-10 -mb-2">
                            Vill du avbryta beställningen?
                        </p>

                        <hr className="w-full border-neutral-300" />

                        <div className="flex flex-row justify-between gap-8 p-10">
                            <StandardButton
                                small
                                onClick={closePopup}
                                className="w-52">
                                Nej
                            </StandardButton>
                            <StandardButton
                                yellow
                                small
                                onClick={submit}
                                className="w-52">
                                Ja
                            </StandardButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
