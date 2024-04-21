import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="footer">
                <div className="footer-column-ll margin-top-auto">
                    <div className="footer-text-large">Curabitur</div>
                    <div className="footer-text-small">Emauris</div>
                    <div className="footer-text-small">Kfringilla</div>
                    <div className="footer-text-small">Oin magna sem</div>
                    <div className="footer-text-small">Kelementum</div>
                </div>
                <div className="footer-column-lr margin-top-auto">
                    <div className="footer-text-large">Fusce</div>
                    <div className="footer-text-small">Econsectetur</div>
                    <div className="footer-text-small">Ksollicitudin</div>
                    <div className="footer-text-small">Omvulputate</div>
                    <div className="footer-text-small">Nunc fringilla tellu</div>
                </div>
                <div className="footer-column-rl margin-top-auto">
                    <div className="footer-text-large">{t('footer.contact')}</div>
                    <div className="footer-text-small bold">{t('footer.headquarters')}</div>
                    <div className="footer-text-small">{t('footer.headquarters-address')}</div>
                    <div className="footer-text-small">{t('footer.headquarters-telephone')}</div>
                    <div className="footer-text-small">{t('footer.headquarters-fax')}</div>
                </div>
                <div className="footer-column-rr margin-top-auto">
                    <div className="footer-text-small bold">{t('footer.office-voru')}</div>
                    <div className="footer-text-small">{t('footer.office-voru-address')}</div>
                    <div className="footer-text-small">{t('footer.office-voru-telephone')}</div>
                    <div className="footer-text-small">{t('footer.office-voru-fax')}</div>
                </div>
            </div>
        </>
    );
};

export default Footer;