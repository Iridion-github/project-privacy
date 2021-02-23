import { useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Row,
  Col,
  Modal
} from 'react-bootstrap'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  border: 14px solid;
  border-color: rgb(131,203,221);
  border-bottom-color: transparent;
 `;

export const Loading = function (props) {
  return (
    <ClipLoader
      loading={props.loading}
      size={80}
      color={"rgb(131, 203, 221)"}
      css={override}
    />
  )
}


/*
<BarLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<BeatLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<BounceLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<CircleLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<ClimbingBoxLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<ClipLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<ClockLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<DotLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<FadeLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<GridLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<HashLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<MoonLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<PacmanLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<PropagateLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<PuffLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<PulseLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<RingLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<RiseLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<RotateLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<ScaleLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>

<SyncLoader
  color={color}
  loading={loading}
  css={override}
  size={100}
/>
*/