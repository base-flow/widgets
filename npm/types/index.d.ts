import * as react from 'react';
import { ReactNode, FocusEventHandler } from 'react';
import { AlignLeftOutlined, ApartmentOutlined, ApiOutlined, AppstoreOutlined, ArrowLeftOutlined, BarsOutlined, BulbFilled, CaretDownOutlined, CaretRightOutlined, CheckOutlined, ChromeOutlined, DatabaseFilled, DeleteFilled, DeleteOutlined, DeploymentUnitOutlined, DownOutlined, EditFilled, EditOutlined, ExceptionOutlined, ExportOutlined, FieldTimeOutlined, FileOutlined, FireOutlined, HddOutlined, HistoryOutlined, HomeOutlined, LikeFilled, LinkOutlined, LockOutlined, LogoutOutlined, MailOutlined, MenuOutlined, MessageFilled, NodeIndexOutlined, PlusCircleOutlined, PlusOutlined, ProductFilled, QuestionCircleOutlined, RocketFilled, SearchOutlined, SettingOutlined, ShareAltOutlined, SignatureFilled, SignatureOutlined, SnippetsOutlined, StarFilled, TagOutlined, ThunderboltFilled, TrademarkOutlined, UserOutlined } from '@ant-design/icons';
import { compile, match, parse, pathToRegexp, stringify } from 'path-to-regexp';

interface BlurInputProps {
    value?: string;
    onChange?: (value?: string) => void;
    placeholder?: string;
    className?: string;
    prefix?: ReactNode;
    addonAfter?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
}
declare const _default$2: react.NamedExoticComponent<BlurInputProps>;

declare const index_AlignLeftOutlined: typeof AlignLeftOutlined;
declare const index_ApartmentOutlined: typeof ApartmentOutlined;
declare const index_ApiOutlined: typeof ApiOutlined;
declare const index_AppstoreOutlined: typeof AppstoreOutlined;
declare const index_ArrowLeftOutlined: typeof ArrowLeftOutlined;
declare const index_BarsOutlined: typeof BarsOutlined;
declare const index_BulbFilled: typeof BulbFilled;
declare const index_CaretDownOutlined: typeof CaretDownOutlined;
declare const index_CaretRightOutlined: typeof CaretRightOutlined;
declare const index_CheckOutlined: typeof CheckOutlined;
declare const index_ChromeOutlined: typeof ChromeOutlined;
declare const index_DatabaseFilled: typeof DatabaseFilled;
declare const index_DeleteFilled: typeof DeleteFilled;
declare const index_DeleteOutlined: typeof DeleteOutlined;
declare const index_DeploymentUnitOutlined: typeof DeploymentUnitOutlined;
declare const index_DownOutlined: typeof DownOutlined;
declare const index_EditFilled: typeof EditFilled;
declare const index_EditOutlined: typeof EditOutlined;
declare const index_ExceptionOutlined: typeof ExceptionOutlined;
declare const index_ExportOutlined: typeof ExportOutlined;
declare const index_FieldTimeOutlined: typeof FieldTimeOutlined;
declare const index_FileOutlined: typeof FileOutlined;
declare const index_FireOutlined: typeof FireOutlined;
declare const index_HddOutlined: typeof HddOutlined;
declare const index_HistoryOutlined: typeof HistoryOutlined;
declare const index_HomeOutlined: typeof HomeOutlined;
declare const index_LikeFilled: typeof LikeFilled;
declare const index_LinkOutlined: typeof LinkOutlined;
declare const index_LockOutlined: typeof LockOutlined;
declare const index_LogoutOutlined: typeof LogoutOutlined;
declare const index_MailOutlined: typeof MailOutlined;
declare const index_MenuOutlined: typeof MenuOutlined;
declare const index_MessageFilled: typeof MessageFilled;
declare const index_NodeIndexOutlined: typeof NodeIndexOutlined;
declare const index_PlusCircleOutlined: typeof PlusCircleOutlined;
declare const index_PlusOutlined: typeof PlusOutlined;
declare const index_ProductFilled: typeof ProductFilled;
declare const index_QuestionCircleOutlined: typeof QuestionCircleOutlined;
declare const index_RocketFilled: typeof RocketFilled;
declare const index_SearchOutlined: typeof SearchOutlined;
declare const index_SettingOutlined: typeof SettingOutlined;
declare const index_ShareAltOutlined: typeof ShareAltOutlined;
declare const index_SignatureFilled: typeof SignatureFilled;
declare const index_SignatureOutlined: typeof SignatureOutlined;
declare const index_SnippetsOutlined: typeof SnippetsOutlined;
declare const index_StarFilled: typeof StarFilled;
declare const index_TagOutlined: typeof TagOutlined;
declare const index_ThunderboltFilled: typeof ThunderboltFilled;
declare const index_TrademarkOutlined: typeof TrademarkOutlined;
declare const index_UserOutlined: typeof UserOutlined;
declare namespace index {
  export { index_AlignLeftOutlined as AlignLeftOutlined, index_ApartmentOutlined as ApartmentOutlined, index_ApiOutlined as ApiOutlined, index_AppstoreOutlined as AppstoreOutlined, index_ArrowLeftOutlined as ArrowLeftOutlined, index_BarsOutlined as BarsOutlined, index_BulbFilled as BulbFilled, index_CaretDownOutlined as CaretDownOutlined, index_CaretRightOutlined as CaretRightOutlined, index_CheckOutlined as CheckOutlined, index_ChromeOutlined as ChromeOutlined, index_DatabaseFilled as DatabaseFilled, index_DeleteFilled as DeleteFilled, index_DeleteOutlined as DeleteOutlined, index_DeploymentUnitOutlined as DeploymentUnitOutlined, index_DownOutlined as DownOutlined, index_EditFilled as EditFilled, index_EditOutlined as EditOutlined, index_ExceptionOutlined as ExceptionOutlined, index_ExportOutlined as ExportOutlined, index_FieldTimeOutlined as FieldTimeOutlined, index_FileOutlined as FileOutlined, index_FireOutlined as FireOutlined, index_HddOutlined as HddOutlined, index_HistoryOutlined as HistoryOutlined, index_HomeOutlined as HomeOutlined, index_LikeFilled as LikeFilled, index_LinkOutlined as LinkOutlined, index_LockOutlined as LockOutlined, index_LogoutOutlined as LogoutOutlined, index_MailOutlined as MailOutlined, index_MenuOutlined as MenuOutlined, index_MessageFilled as MessageFilled, index_NodeIndexOutlined as NodeIndexOutlined, index_PlusCircleOutlined as PlusCircleOutlined, index_PlusOutlined as PlusOutlined, index_ProductFilled as ProductFilled, index_QuestionCircleOutlined as QuestionCircleOutlined, index_RocketFilled as RocketFilled, index_SearchOutlined as SearchOutlined, index_SettingOutlined as SettingOutlined, index_ShareAltOutlined as ShareAltOutlined, index_SignatureFilled as SignatureFilled, index_SignatureOutlined as SignatureOutlined, index_SnippetsOutlined as SnippetsOutlined, index_StarFilled as StarFilled, index_TagOutlined as TagOutlined, index_ThunderboltFilled as ThunderboltFilled, index_TrademarkOutlined as TrademarkOutlined, index_UserOutlined as UserOutlined };
}

declare const PathToRegexp: {
    compile: typeof compile;
    match: typeof match;
    parse: typeof parse;
    pathToRegexp: typeof pathToRegexp;
    stringify: typeof stringify;
};

interface StringInputProps {
    value?: string;
    onChange?: (value?: string) => void;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    placeholder?: string;
    className?: string;
    prefix?: ReactNode;
    addonAfter?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
}
declare const _default$1: react.NamedExoticComponent<StringInputProps>;

interface StringSelectProps<V extends string | string[]> {
    value?: V;
    onChange?: (value?: V) => void;
    multiple?: boolean;
    options: Array<{
        value: string;
        label: string;
    }>;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    placeholder?: string;
    className?: string;
    showSearch?: boolean;
    prefix?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
}
declare const Component: <V extends string | string[]>(props: StringSelectProps<V>) => ReactNode;
declare const _default: typeof Component;

export { _default$2 as BlurInput, type BlurInputProps, index as Icons, PathToRegexp, _default$1 as StringInput, type StringInputProps, _default as StringSelect, type StringSelectProps };
