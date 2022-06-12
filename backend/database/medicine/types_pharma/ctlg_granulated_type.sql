USE pastilla;

CREATE TABLE ctlg_granulated_type (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    id_ctlg_pharmaceutical_forms INT(11),
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_ctlg_pharmaceutical_forms) REFERENCES ctlg_pharmaceutical_forms(id)
);