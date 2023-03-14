type environmentProps = {
  account: string;
  pool: string;
  image_url: string;
  video_url: string;
};

export const environment: environmentProps = {
  account: 'https://beta-gateway-bhwkuf2epa-uc.a.run.app/account/API/V1/',
  pool: 'https://beta-gateway-bhwkuf2epa-uc.a.run.app/pool/API/V1/',
  image_url: 'http://localhost:3000/images/',
  video_url: 'http://localhost:3000/movies/',
};
