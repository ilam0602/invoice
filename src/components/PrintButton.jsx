function PrintButton() {

    const handlePrint = () => {
        window.print();
    };

    return(
        <div>
            <button className="print_button" onClick={handlePrint}>PRINT</button>
        </div>
    );

}

export default PrintButton;
