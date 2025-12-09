import * as react from 'react';
import { CSSProperties, ReactNode, FocusEventHandler, MouseEvent } from 'react';
import { AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, AlipayCircleOutlined, AndroidOutlined, AppleOutlined, AreaChartOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowUpOutlined, ArrowsAltOutlined, BackwardOutlined, BarChartOutlined, CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined, CaretUpOutlined, CheckCircleFilled, CheckCircleOutlined, CheckOutlined, CheckSquareFilled, CheckSquareOutlined, ClockCircleFilled, ClockCircleOutlined, CloseCircleFilled, CloseCircleOutlined, CloseOutlined, CloseSquareFilled, CloseSquareOutlined, ColumnHeightOutlined, ColumnWidthOutlined, CopyOutlined, DeleteOutlined, DockerOutlined, DotChartOutlined, DoubleLeftOutlined, DoubleRightOutlined, DownCircleFilled, DownCircleOutlined, DownOutlined, DownSquareOutlined, DragOutlined, EditOutlined, ExclamationCircleFilled, ExclamationCircleOutlined, FontColorsOutlined, FormOutlined, ForwardOutlined, FullscreenExitOutlined, FullscreenOutlined, GithubOutlined, InfoCircleFilled, InfoCircleOutlined, IssuesCloseOutlined, LeftCircleFilled, LeftCircleOutlined, LeftOutlined, LeftSquareOutlined, LineChartOutlined, LoginOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MinusCircleFilled, MinusCircleOutlined, MinusOutlined, MinusSquareFilled, MinusSquareOutlined, OpenAIOutlined, OrderedListOutlined, PauseCircleFilled, PauseCircleOutlined, PauseOutlined, PicCenterOutlined, PicLeftOutlined, PicRightOutlined, PieChartOutlined, PlayCircleFilled, PlayCircleOutlined, PlusCircleFilled, PlusCircleOutlined, PlusOutlined, PlusSquareFilled, PlusSquareOutlined, QqOutlined, QuestionCircleFilled, QuestionCircleOutlined, QuestionOutlined, RedditOutlined, RedoOutlined, RetweetOutlined, RightCircleFilled, RightCircleOutlined, RightOutlined, RightSquareOutlined, ScissorOutlined, ShrinkOutlined, SlidersOutlined, SnippetsOutlined, SortAscendingOutlined, SortDescendingOutlined, StopFilled, StopOutlined, SwapOutlined, TikTokOutlined, UndoOutlined, UnorderedListOutlined, UpCircleFilled, UpCircleOutlined, UpOutlined, UpSquareOutlined, WarningFilled, WarningOutlined, WechatOutlined, WhatsAppOutlined, WindowsOutlined, YoutubeOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { compile, match, parse, pathToRegexp, stringify } from 'path-to-regexp';

interface BlurInputProps {
    value?: string;
    onChange?: (value?: string) => void;
    placeholder?: string;
    className?: string;
    style?: CSSProperties;
    prefix?: ReactNode;
    addonAfter?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
    rows?: number;
    showCount?: boolean;
    maxLength?: number;
}
declare const _default$5: react.NamedExoticComponent<BlurInputProps>;

interface DatePickerProps {
    value?: string;
    onChange?: (value?: string) => void;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    placeholder?: string;
    showTime?: boolean;
    className?: string;
    style?: CSSProperties;
    prefix?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
}
declare const _default$4: react.NamedExoticComponent<DatePickerProps>;

interface DescMDProps {
    value?: string;
    className?: string;
    style?: CSSProperties;
    onClick?: (e: MouseEvent) => void;
    onClickCapture?: (e: MouseEvent) => void;
}
declare const _default$3: react.NamedExoticComponent<DescMDProps>;

/** biome-ignore-all assist/source/organizeImports: <> */

declare const index_AlignCenterOutlined: typeof AlignCenterOutlined;
declare const index_AlignLeftOutlined: typeof AlignLeftOutlined;
declare const index_AlignRightOutlined: typeof AlignRightOutlined;
declare const index_AlipayCircleOutlined: typeof AlipayCircleOutlined;
declare const index_AndroidOutlined: typeof AndroidOutlined;
declare const index_AppleOutlined: typeof AppleOutlined;
declare const index_AreaChartOutlined: typeof AreaChartOutlined;
declare const index_ArrowDownOutlined: typeof ArrowDownOutlined;
declare const index_ArrowLeftOutlined: typeof ArrowLeftOutlined;
declare const index_ArrowRightOutlined: typeof ArrowRightOutlined;
declare const index_ArrowUpOutlined: typeof ArrowUpOutlined;
declare const index_ArrowsAltOutlined: typeof ArrowsAltOutlined;
declare const index_BackwardOutlined: typeof BackwardOutlined;
declare const index_BarChartOutlined: typeof BarChartOutlined;
declare const index_CaretDownOutlined: typeof CaretDownOutlined;
declare const index_CaretLeftOutlined: typeof CaretLeftOutlined;
declare const index_CaretRightOutlined: typeof CaretRightOutlined;
declare const index_CaretUpOutlined: typeof CaretUpOutlined;
declare const index_CheckCircleFilled: typeof CheckCircleFilled;
declare const index_CheckCircleOutlined: typeof CheckCircleOutlined;
declare const index_CheckOutlined: typeof CheckOutlined;
declare const index_CheckSquareFilled: typeof CheckSquareFilled;
declare const index_CheckSquareOutlined: typeof CheckSquareOutlined;
declare const index_ClockCircleFilled: typeof ClockCircleFilled;
declare const index_ClockCircleOutlined: typeof ClockCircleOutlined;
declare const index_CloseCircleFilled: typeof CloseCircleFilled;
declare const index_CloseCircleOutlined: typeof CloseCircleOutlined;
declare const index_CloseOutlined: typeof CloseOutlined;
declare const index_CloseSquareFilled: typeof CloseSquareFilled;
declare const index_CloseSquareOutlined: typeof CloseSquareOutlined;
declare const index_ColumnHeightOutlined: typeof ColumnHeightOutlined;
declare const index_ColumnWidthOutlined: typeof ColumnWidthOutlined;
declare const index_CopyOutlined: typeof CopyOutlined;
declare const index_DeleteOutlined: typeof DeleteOutlined;
declare const index_DockerOutlined: typeof DockerOutlined;
declare const index_DotChartOutlined: typeof DotChartOutlined;
declare const index_DoubleLeftOutlined: typeof DoubleLeftOutlined;
declare const index_DoubleRightOutlined: typeof DoubleRightOutlined;
declare const index_DownCircleFilled: typeof DownCircleFilled;
declare const index_DownCircleOutlined: typeof DownCircleOutlined;
declare const index_DownOutlined: typeof DownOutlined;
declare const index_DownSquareOutlined: typeof DownSquareOutlined;
declare const index_DragOutlined: typeof DragOutlined;
declare const index_EditOutlined: typeof EditOutlined;
declare const index_ExclamationCircleFilled: typeof ExclamationCircleFilled;
declare const index_ExclamationCircleOutlined: typeof ExclamationCircleOutlined;
declare const index_FontColorsOutlined: typeof FontColorsOutlined;
declare const index_FormOutlined: typeof FormOutlined;
declare const index_ForwardOutlined: typeof ForwardOutlined;
declare const index_FullscreenExitOutlined: typeof FullscreenExitOutlined;
declare const index_FullscreenOutlined: typeof FullscreenOutlined;
declare const index_GithubOutlined: typeof GithubOutlined;
declare const index_InfoCircleFilled: typeof InfoCircleFilled;
declare const index_InfoCircleOutlined: typeof InfoCircleOutlined;
declare const index_IssuesCloseOutlined: typeof IssuesCloseOutlined;
declare const index_LeftCircleFilled: typeof LeftCircleFilled;
declare const index_LeftCircleOutlined: typeof LeftCircleOutlined;
declare const index_LeftOutlined: typeof LeftOutlined;
declare const index_LeftSquareOutlined: typeof LeftSquareOutlined;
declare const index_LineChartOutlined: typeof LineChartOutlined;
declare const index_LoginOutlined: typeof LoginOutlined;
declare const index_LogoutOutlined: typeof LogoutOutlined;
declare const index_MenuFoldOutlined: typeof MenuFoldOutlined;
declare const index_MenuUnfoldOutlined: typeof MenuUnfoldOutlined;
declare const index_MinusCircleFilled: typeof MinusCircleFilled;
declare const index_MinusCircleOutlined: typeof MinusCircleOutlined;
declare const index_MinusOutlined: typeof MinusOutlined;
declare const index_MinusSquareFilled: typeof MinusSquareFilled;
declare const index_MinusSquareOutlined: typeof MinusSquareOutlined;
declare const index_OpenAIOutlined: typeof OpenAIOutlined;
declare const index_OrderedListOutlined: typeof OrderedListOutlined;
declare const index_PauseCircleFilled: typeof PauseCircleFilled;
declare const index_PauseCircleOutlined: typeof PauseCircleOutlined;
declare const index_PauseOutlined: typeof PauseOutlined;
declare const index_PicCenterOutlined: typeof PicCenterOutlined;
declare const index_PicLeftOutlined: typeof PicLeftOutlined;
declare const index_PicRightOutlined: typeof PicRightOutlined;
declare const index_PieChartOutlined: typeof PieChartOutlined;
declare const index_PlayCircleFilled: typeof PlayCircleFilled;
declare const index_PlayCircleOutlined: typeof PlayCircleOutlined;
declare const index_PlusCircleFilled: typeof PlusCircleFilled;
declare const index_PlusCircleOutlined: typeof PlusCircleOutlined;
declare const index_PlusOutlined: typeof PlusOutlined;
declare const index_PlusSquareFilled: typeof PlusSquareFilled;
declare const index_PlusSquareOutlined: typeof PlusSquareOutlined;
declare const index_QqOutlined: typeof QqOutlined;
declare const index_QuestionCircleFilled: typeof QuestionCircleFilled;
declare const index_QuestionCircleOutlined: typeof QuestionCircleOutlined;
declare const index_QuestionOutlined: typeof QuestionOutlined;
declare const index_RedditOutlined: typeof RedditOutlined;
declare const index_RedoOutlined: typeof RedoOutlined;
declare const index_RetweetOutlined: typeof RetweetOutlined;
declare const index_RightCircleFilled: typeof RightCircleFilled;
declare const index_RightCircleOutlined: typeof RightCircleOutlined;
declare const index_RightOutlined: typeof RightOutlined;
declare const index_RightSquareOutlined: typeof RightSquareOutlined;
declare const index_ScissorOutlined: typeof ScissorOutlined;
declare const index_ShrinkOutlined: typeof ShrinkOutlined;
declare const index_SlidersOutlined: typeof SlidersOutlined;
declare const index_SnippetsOutlined: typeof SnippetsOutlined;
declare const index_SortAscendingOutlined: typeof SortAscendingOutlined;
declare const index_SortDescendingOutlined: typeof SortDescendingOutlined;
declare const index_StopFilled: typeof StopFilled;
declare const index_StopOutlined: typeof StopOutlined;
declare const index_SwapOutlined: typeof SwapOutlined;
declare const index_TikTokOutlined: typeof TikTokOutlined;
declare const index_UndoOutlined: typeof UndoOutlined;
declare const index_UnorderedListOutlined: typeof UnorderedListOutlined;
declare const index_UpCircleFilled: typeof UpCircleFilled;
declare const index_UpCircleOutlined: typeof UpCircleOutlined;
declare const index_UpOutlined: typeof UpOutlined;
declare const index_UpSquareOutlined: typeof UpSquareOutlined;
declare const index_WarningFilled: typeof WarningFilled;
declare const index_WarningOutlined: typeof WarningOutlined;
declare const index_WechatOutlined: typeof WechatOutlined;
declare const index_WhatsAppOutlined: typeof WhatsAppOutlined;
declare const index_WindowsOutlined: typeof WindowsOutlined;
declare const index_YoutubeOutlined: typeof YoutubeOutlined;
declare const index_ZoomInOutlined: typeof ZoomInOutlined;
declare const index_ZoomOutOutlined: typeof ZoomOutOutlined;
declare namespace index {
  export { index_AlignCenterOutlined as AlignCenterOutlined, index_AlignLeftOutlined as AlignLeftOutlined, index_AlignRightOutlined as AlignRightOutlined, index_AlipayCircleOutlined as AlipayCircleOutlined, index_AndroidOutlined as AndroidOutlined, index_AppleOutlined as AppleOutlined, index_AreaChartOutlined as AreaChartOutlined, index_ArrowDownOutlined as ArrowDownOutlined, index_ArrowLeftOutlined as ArrowLeftOutlined, index_ArrowRightOutlined as ArrowRightOutlined, index_ArrowUpOutlined as ArrowUpOutlined, index_ArrowsAltOutlined as ArrowsAltOutlined, index_BackwardOutlined as BackwardOutlined, index_BarChartOutlined as BarChartOutlined, index_CaretDownOutlined as CaretDownOutlined, index_CaretLeftOutlined as CaretLeftOutlined, index_CaretRightOutlined as CaretRightOutlined, index_CaretUpOutlined as CaretUpOutlined, index_CheckCircleFilled as CheckCircleFilled, index_CheckCircleOutlined as CheckCircleOutlined, index_CheckOutlined as CheckOutlined, index_CheckSquareFilled as CheckSquareFilled, index_CheckSquareOutlined as CheckSquareOutlined, index_ClockCircleFilled as ClockCircleFilled, index_ClockCircleOutlined as ClockCircleOutlined, index_CloseCircleFilled as CloseCircleFilled, index_CloseCircleOutlined as CloseCircleOutlined, index_CloseOutlined as CloseOutlined, index_CloseSquareFilled as CloseSquareFilled, index_CloseSquareOutlined as CloseSquareOutlined, index_ColumnHeightOutlined as ColumnHeightOutlined, index_ColumnWidthOutlined as ColumnWidthOutlined, index_CopyOutlined as CopyOutlined, index_DeleteOutlined as DeleteOutlined, index_DockerOutlined as DockerOutlined, index_DotChartOutlined as DotChartOutlined, index_DoubleLeftOutlined as DoubleLeftOutlined, index_DoubleRightOutlined as DoubleRightOutlined, index_DownCircleFilled as DownCircleFilled, index_DownCircleOutlined as DownCircleOutlined, index_DownOutlined as DownOutlined, index_DownSquareOutlined as DownSquareOutlined, index_DragOutlined as DragOutlined, index_EditOutlined as EditOutlined, index_ExclamationCircleFilled as ExclamationCircleFilled, index_ExclamationCircleOutlined as ExclamationCircleOutlined, index_FontColorsOutlined as FontColorsOutlined, index_FormOutlined as FormOutlined, index_ForwardOutlined as ForwardOutlined, index_FullscreenExitOutlined as FullscreenExitOutlined, index_FullscreenOutlined as FullscreenOutlined, index_GithubOutlined as GithubOutlined, index_InfoCircleFilled as InfoCircleFilled, index_InfoCircleOutlined as InfoCircleOutlined, index_IssuesCloseOutlined as IssuesCloseOutlined, index_LeftCircleFilled as LeftCircleFilled, index_LeftCircleOutlined as LeftCircleOutlined, index_LeftOutlined as LeftOutlined, index_LeftSquareOutlined as LeftSquareOutlined, index_LineChartOutlined as LineChartOutlined, index_LoginOutlined as LoginOutlined, index_LogoutOutlined as LogoutOutlined, index_MenuFoldOutlined as MenuFoldOutlined, index_MenuUnfoldOutlined as MenuUnfoldOutlined, index_MinusCircleFilled as MinusCircleFilled, index_MinusCircleOutlined as MinusCircleOutlined, index_MinusOutlined as MinusOutlined, index_MinusSquareFilled as MinusSquareFilled, index_MinusSquareOutlined as MinusSquareOutlined, index_OpenAIOutlined as OpenAIOutlined, index_OrderedListOutlined as OrderedListOutlined, index_PauseCircleFilled as PauseCircleFilled, index_PauseCircleOutlined as PauseCircleOutlined, index_PauseOutlined as PauseOutlined, index_PicCenterOutlined as PicCenterOutlined, index_PicLeftOutlined as PicLeftOutlined, index_PicRightOutlined as PicRightOutlined, index_PieChartOutlined as PieChartOutlined, index_PlayCircleFilled as PlayCircleFilled, index_PlayCircleOutlined as PlayCircleOutlined, index_PlusCircleFilled as PlusCircleFilled, index_PlusCircleOutlined as PlusCircleOutlined, index_PlusOutlined as PlusOutlined, index_PlusSquareFilled as PlusSquareFilled, index_PlusSquareOutlined as PlusSquareOutlined, index_QqOutlined as QqOutlined, index_QuestionCircleFilled as QuestionCircleFilled, index_QuestionCircleOutlined as QuestionCircleOutlined, index_QuestionOutlined as QuestionOutlined, index_RedditOutlined as RedditOutlined, index_RedoOutlined as RedoOutlined, index_RetweetOutlined as RetweetOutlined, index_RightCircleFilled as RightCircleFilled, index_RightCircleOutlined as RightCircleOutlined, index_RightOutlined as RightOutlined, index_RightSquareOutlined as RightSquareOutlined, index_ScissorOutlined as ScissorOutlined, index_ShrinkOutlined as ShrinkOutlined, index_SlidersOutlined as SlidersOutlined, index_SnippetsOutlined as SnippetsOutlined, index_SortAscendingOutlined as SortAscendingOutlined, index_SortDescendingOutlined as SortDescendingOutlined, index_StopFilled as StopFilled, index_StopOutlined as StopOutlined, index_SwapOutlined as SwapOutlined, index_TikTokOutlined as TikTokOutlined, index_UndoOutlined as UndoOutlined, index_UnorderedListOutlined as UnorderedListOutlined, index_UpCircleFilled as UpCircleFilled, index_UpCircleOutlined as UpCircleOutlined, index_UpOutlined as UpOutlined, index_UpSquareOutlined as UpSquareOutlined, index_WarningFilled as WarningFilled, index_WarningOutlined as WarningOutlined, index_WechatOutlined as WechatOutlined, index_WhatsAppOutlined as WhatsAppOutlined, index_WindowsOutlined as WindowsOutlined, index_YoutubeOutlined as YoutubeOutlined, index_ZoomInOutlined as ZoomInOutlined, index_ZoomOutOutlined as ZoomOutOutlined };
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
    style?: CSSProperties;
    prefix?: ReactNode;
    addonAfter?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
    rows?: number;
    showCount?: boolean;
    maxLength?: number;
}
declare const _default$2: react.NamedExoticComponent<StringInputProps>;

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
    style?: CSSProperties;
    showSearch?: boolean;
    prefix?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
}
declare const Component: <V extends string | string[]>(props: StringSelectProps<V>) => ReactNode;
declare const _default$1: typeof Component;

interface TimePickerProps {
    value?: string;
    onChange?: (value?: string) => void;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    placeholder?: string;
    className?: string;
    style?: CSSProperties;
    prefix?: ReactNode;
    allowClear?: boolean;
    block?: boolean;
    size?: "small" | "middle";
    variant?: "filled" | "borderless";
}
declare const _default: react.NamedExoticComponent<TimePickerProps>;

export { _default$5 as BlurInput, type BlurInputProps, _default$4 as DatePicker, type DatePickerProps, _default$3 as DescMD, type DescMDProps, index as Icons, PathToRegexp, _default$2 as StringInput, type StringInputProps, _default$1 as StringSelect, type StringSelectProps, _default as TimePicker, type TimePickerProps };
