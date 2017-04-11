#ifndef HAPPYSETTINGS_H
#define HAPPYSETTINGS_H

#include <QDialog>

namespace Ui {
class HappySettings;
}

class HappySettings : public QDialog
{
    Q_OBJECT

public:
    explicit HappySettings(QWidget *parent = 0);
    ~HappySettings();

private:
    Ui::HappySettings *ui;
};

#endif // HAPPYSETTINGS_H
