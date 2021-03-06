USE pastilla;

CREATE TABLE ctlg_type_pharma (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    type INT(11) NULL,
    id_ctlg_pharmaceutical_forms INT(11) NULL,
    id_ctlg_state_matter INT(11) NULL,
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_ctlg_pharmaceutical_forms) REFERENCES ctlg_pharmaceutical_forms(id),
    FOREIGN KEY (id_ctlg_state_matter) REFERENCES ctlg_state_matter(id)
);
#capsula
#   capsula dura
#   capsula semi solida