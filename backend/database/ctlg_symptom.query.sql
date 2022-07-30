-- SQLBook: Code
USE pastilla;

CREATE TABLE ctlg_symptom (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    id_ctlg_alphabet INT(11),
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_ctlg_alphabet) REFERENCES ctlg_alphabet(id)
);

//dolor cabeza 